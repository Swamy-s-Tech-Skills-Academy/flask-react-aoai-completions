import os
from openai import AzureOpenAI
from flask import Response, stream_with_context
from utils.env_config import get_config_value

# Load environment variables
api_key = os.getenv("AZURE_OPENAI_API_KEY")
endpoint = get_config_value("AZURE_OPENAI_ENDPOINT")
deployment_name = get_config_value("AZURE_OPENAI_DEPLOYMENT_NAME")
api_version = get_config_value(
    "AZURE_OPENAI_API_VERSION")  # ✅ Now correctly loaded

if not api_key or not endpoint or not deployment_name or not api_version:
    raise ValueError("Azure OpenAI environment variables are missing!")

# Correct Azure OpenAI client setup
client = AzureOpenAI(
    api_key=api_key,
    azure_endpoint=endpoint,  # ✅ Corrected
    api_version=api_version   # ✅ Added required api_version
)


def get_completion_stream(prompt):
    """
    Calls Azure OpenAI API and streams responses.
    """
    try:
        stream = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model=deployment_name,  # Azure uses a deployment name instead of model name
            stream=True,
        )

        if not hasattr(stream, "choices"):
            yield "Error: No response from OpenAI API"
            return

        for chunk in stream:
            text = chunk.choices[0].delta.content if chunk.choices and chunk.choices[0].delta.content else ""
            yield text  # Yielding chunks for streaming

    except Exception as e:
        yield f"Error: {str(e)}"


def stream_response(prompt):
    """
    Flask-compatible streaming response.
    """
    return Response(
        stream_with_context(get_completion_stream(prompt)),
        content_type="text/event-stream"
    )
