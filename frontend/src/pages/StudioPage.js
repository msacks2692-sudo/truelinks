import React, { useState } from 'react';
import Mixer from '../components/Mixer';
import styles from '../components/Mixer.module.css'; // Reusing some styles

const StudioPage = () => {
  const [url, setUrl] = useState('');
  const [stems, setStems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleProcess = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setStems(null);

    try {
      const response = await fetch('/api/separate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Processing failed');
      }

      const data = await response.json();
      setStems(data.stems);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', color: 'white', minHeight: '100vh', backgroundColor: '#121212' }}>
      <h1>Studio - Stem Separator</h1>

      <div style={{ marginBottom: '30px', background: '#1e1e1e', padding: '20px', borderRadius: '8px' }}>
        <p>Enter a YouTube or SoundCloud URL to separate vocals and instruments.</p>
        <form onSubmit={handleProcess} style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #333', background: '#000', color: 'white' }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
                padding: '10px 20px',
                background: loading ? '#555' : '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Processing...' : 'Separate Audio'}
          </button>
        </form>
        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      </div>

      {stems && (
        <div>
          <h2>Mixer Console</h2>
          <Mixer stems={stems} />
        </div>
      )}
    </div>
  );
};

export default StudioPage;
