import React, { useState, useEffect, useRef } from 'react';
import styles from './Mixer.module.css';

const Mixer = ({ stems }) => {
  const [loading, setLoading] = useState(true);
  const audioContextRef = useRef(null);
  const sourcesRef = useRef({});
  const gainsRef = useRef({});
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize tracks state dynamically
  const [tracks, setTracks] = useState({});

  useEffect(() => {
    if (!stems) return;

    // Initialize tracks based on stems keys
    const initialTracks = {};
    Object.keys(stems).forEach(key => {
        initialTracks[key] = { volume: 0.8, muted: false, label: key.charAt(0).toUpperCase() + key.slice(1) };
    });
    setTracks(initialTracks);

    const initAudio = async () => {
      setLoading(true);
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioContextRef.current = ctx;

      try {
        await Promise.all(
          Object.entries(stems).map(async ([key, url]) => {
            // Relative URL handling
            const fullUrl = url.startsWith('http') ? url : url;

            const response = await fetch(fullUrl);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await ctx.decodeAudioData(arrayBuffer);

            // Create gain node
            const gainNode = ctx.createGain();
            // Default volume from initialTracks
            gainNode.gain.value = 0.8;
            gainNode.connect(ctx.destination);
            gainsRef.current[key] = gainNode;

            // Buffer the source
            sourcesRef.current[key] = { buffer: audioBuffer };
          })
        );
        setLoading(false);
      } catch (err) {
        console.error("Error loading audio", err);
        setLoading(false);
      }
    };

    initAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [stems]);

  const togglePlay = () => {
    if (!audioContextRef.current) return;

    if (isPlaying) {
      // Stop
      Object.keys(sourcesRef.current).forEach(key => {
         try {
             if (sourcesRef.current[key].node) {
                 sourcesRef.current[key].node.stop();
                 sourcesRef.current[key].node = null;
             }
         } catch(e) {}
      });
      setIsPlaying(false);
    } else {
      // Start
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      Object.keys(sourcesRef.current).forEach(key => {
        const source = audioContextRef.current.createBufferSource();
        source.buffer = sourcesRef.current[key].buffer;
        // Connect to the specific gain node for this track
        if (gainsRef.current[key]) {
             source.connect(gainsRef.current[key]);
        }
        source.start(0);
        sourcesRef.current[key].node = source;
      });
      setIsPlaying(true);
    }
  };

  const updateVolume = (key, val) => {
    const newVol = parseFloat(val);
    setTracks(prev => ({
      ...prev,
      [key]: { ...prev[key], volume: newVol }
    }));
    if (gainsRef.current[key]) {
      gainsRef.current[key].gain.value = tracks[key].muted ? 0 : newVol;
    }
  };

  const toggleMute = (key) => {
    const isMuted = !tracks[key].muted;
    setTracks(prev => ({
      ...prev,
      [key]: { ...prev[key], muted: isMuted }
    }));
    if (gainsRef.current[key]) {
      gainsRef.current[key].gain.value = isMuted ? 0 : tracks[key].volume;
    }
  };

  if (loading) return <div className={styles.loading}>Loading Mixer...</div>;

  return (
    <div className={styles.mixerContainer}>
      <div className={styles.controls}>
        <button onClick={togglePlay} className={styles.playButton}>
          {isPlaying ? 'STOP' : 'PLAY'}
        </button>
      </div>
      <div className={styles.board}>
        {Object.keys(tracks).map(key => (
          <div key={key} className={styles.channelStrip}>
            <div className={styles.label}>{tracks[key].label}</div>
            <div className={styles.faderContainer}>
               <input
                 type="range"
                 min="0"
                 max="1.2"
                 step="0.01"
                 value={tracks[key].volume}
                 onChange={(e) => updateVolume(key, e.target.value)}
                 className={styles.fader}
                 orient="vertical" // Firefox specific
               />
            </div>
            <button
              className={`${styles.muteButton} ${tracks[key].muted ? styles.muted : ''}`}
              onClick={() => toggleMute(key)}
            >
              MUTE
            </button>
            <div className={styles.meter}>
                {/* Visual meter placeholder */}
                <div
                    className={styles.meterLevel}
                    style={{height: `${Math.min(tracks[key].volume * 80, 100)}%`}}
                ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mixer;
