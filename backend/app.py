import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from openai import OpenAI
from audio_processor import separate_audio, OUTPUT_DIR

app = Flask(__name__)
CORS(app)

# Initialize the OpenAI client
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

@app.route('/static/audio/<path:filename>')
def serve_audio(filename):
    return send_from_directory(OUTPUT_DIR, filename)

@app.route('/api/separate', methods=['POST'])
def separate():
    data = request.json
    url = data.get('url')
    if not url:
        return jsonify({'error': 'No URL provided'}), 400

    # Use mock=True if environment variable MOCK_AUDIO is set
    # or if we want to default to mock for this environment
    use_mock = os.environ.get('MOCK_AUDIO', 'False').lower() == 'true'

    try:
        stems = separate_audio(url, mock=use_mock)
        return jsonify({'stems': stems})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/hello')
def hello():
    return {'message': 'Hello from the backend!'}


@app.route('/api/generate-icebreaker', methods=['POST'])
def generate_icebreaker():
    # For now, we'll use mock data. In the future, this would come from the request.
    interests = ["hiking", "reading", "cooking"]

    prompt = f"Write a short, friendly, and engaging icebreaker for a dating app. The user's interests are: {', '.join(interests)}. The icebreaker should be based on one or more of these interests."

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that generates creative dating app icebreakers."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=50
        )
        icebreaker = response.choices[0].message.content.strip()
        return jsonify({'icebreaker': icebreaker})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
