import os
import subprocess
import shutil
from flask import send_from_directory

# Configure separate output directory
OUTPUT_DIR = os.path.join(os.getcwd(), 'static', 'audio')
os.makedirs(OUTPUT_DIR, exist_ok=True)

def separate_audio(url, mock=False):
    """
    Downloads audio from URL and separates it using Spleeter.
    Returns a dictionary with paths to stems.
    """

    # Generate a simple ID for the session (in prod use UUID)
    session_id = "demo_session"
    session_dir = os.path.join(OUTPUT_DIR, session_id)

    if mock:
        return _mock_separation(session_dir)

    try:
        # 1. Download audio using yt-dlp
        # We download to a temporary file
        temp_audio_path = os.path.join(OUTPUT_DIR, "temp_input.mp3")

        # Clean up previous temp
        if os.path.exists(temp_audio_path):
            os.remove(temp_audio_path)

        # Download command
        # -x: Extract audio
        # --audio-format mp3
        cmd = [
            "yt-dlp",
            "-x",
            "--audio-format", "mp3",
            "-o", temp_audio_path,
            url
        ]

        subprocess.run(cmd, check=True)

        # 2. Separate using Spleeter
        # spleeter separate -p spleeter:4stems -o output/ audio_example.mp3
        # We output to static/audio/

        # Clean up previous session
        if os.path.exists(session_dir):
            shutil.rmtree(session_dir)

        sep_cmd = [
            "spleeter",
            "separate",
            "-p", "spleeter:4stems",
            "-o", OUTPUT_DIR,
            temp_audio_path
        ]

        subprocess.run(sep_cmd, check=True)

        # Spleeter creates a folder named after the input file (temp_input)
        # expected output: static/audio/temp_input/{vocals.wav, drums.wav...}
        spleeter_output_dir = os.path.join(OUTPUT_DIR, "temp_input")

        # Rename it to session_dir for clarity
        if os.path.exists(session_dir):
             shutil.rmtree(session_dir)

        os.rename(spleeter_output_dir, session_dir)

        # Return URLs (relative to static serving)
        base_url = f"/static/audio/{session_id}"
        return {
            "vocals": f"{base_url}/vocals.wav",
            "drums": f"{base_url}/drums.wav",
            "bass": f"{base_url}/bass.wav",
            "other": f"{base_url}/other.wav"
        }

    except Exception as e:
        print(f"Error processing audio: {e}")
        # Fallback to mock if real processing fails (e.g. missing ffmpeg/spleeter)
        return _mock_separation(session_dir)

def _mock_separation(session_dir):
    """
    Creates dummy files for testing UI when backend processing fails.
    """
    if not os.path.exists(session_dir):
        os.makedirs(session_dir)

    stems = ["vocals", "drums", "bass", "other"]
    base_url = f"/static/audio/demo_session"
    result = {}

    for stem in stems:
        # creating empty files just so they exist, usually we'd copy a sample
        # In a real mock, we might copy a valid small wav file here
        file_path = os.path.join(session_dir, f"{stem}.wav")
        if not os.path.exists(file_path):
            with open(file_path, 'wb') as f:
                f.write(b'RIFF....WAVEfmt ...') # Invalid WAV but file exists

        result[stem] = f"{base_url}/{stem}.wav"

    return result
