from flask import Flask, request, jsonify, render_template
import requests
from flask_cors import CORS  # Import Flask-CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_KEY = "b0iUOQPJnXCU5wdtAv18boFGuqgxGDr0"  # Replace with your actual API key
API_URL = "https://api.mistral.ai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

def generate_text(prompt):
    data = {
        "model": "mistral-tiny",
        "messages": [{"role": "user", "content": prompt}]
    }

    try:
        response = requests.post(API_URL, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()

        if 'choices' in result and result['choices']:
            return result['choices'][0]['message']['content']
        else:
            return "No generated text found in the response."

    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        if 'response' in locals() and response is not None:
            print(f"Response status code: {response.status_code}")
            try:
                print(f"Response body: {response.json()}")
            except requests.exceptions.JSONDecodeError:
                print("Response body could not be parsed as JSON. Raw Response: ", response.text)
        return None

    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt')
    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    generated_text = generate_text(prompt)
    if generated_text:
        return jsonify({'response': generated_text})
    else:
        return jsonify({'error': 'Failed to generate text'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Explicitly set port 5000