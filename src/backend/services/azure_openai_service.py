import os
from openai import AzureOpenAI
from flask import Response
from utils.env_config import get_config_value

# Load environment variables
api_key = os.getenv("AZURE_OPENAI_API_KEY")
endpoint = get_config_value("AZURE_OPENAI_ENDPOINT")
deployment_name = get_config_value("AZURE_OPENAI_DEPLOYMENT_NAME")
api_version = get_config_value(
    "AZURE_OPENAI_API_VERSION")  # ✅ Now correctly loaded

if not api_key or not endpoint or not deployment_name or not api_version:
    raise ValueError("Azure OpenAI environment variables are missing!")

# ✅ Correct Azure OpenAI client setup (Synchronous)
client = AzureOpenAI(
    api_key=api_key,
    azure_endpoint=endpoint,  # ✅ Corrected
    api_version=api_version   # ✅ Added required api_version
)


def fetch_openai_response(prompt):
    """
    Calls Azure OpenAI API synchronously and returns a full response.
    """
    chat_prompt = [
        {"role": "system", "content": "You are an AI assistant that helps people find information."},
        {"role": "user", "content": prompt}
    ]

    try:
        response = client.chat.completions.create(
            model=deployment_name,
            messages=chat_prompt,
            max_tokens=800,
            temperature=0.7,
            top_p=0.95,
            frequency_penalty=0,
            presence_penalty=0,
            stop=None,
            stream=False  # ✅ Not streaming, returns full response
        )

        # ✅ Print response for debugging
        print(response)

        if response.choices:
            # ✅ Return full response
            return response.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"


def generate_response(prompt):
    """
    Flask-compatible synchronous response.
    """
    return Response(
        fetch_openai_response(prompt),  # ✅ Now returning a full response
        content_type="text/plain"
    )
