import os
from openai import OpenAI
from flask import Response, stream_with_context

# Load environment variables
api_key = os.getenv("AZURE_OPENAI_API_KEY")
endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
deployment_name = os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME")
api_version = os.getenv("AZURE_OPENAI_API_VERSION")

if not api_key or not endpoint or not deployment_name or not api_version:
    raise ValueError("Azure OpenAI environment variables are missing!")

# Create an OpenAI client with Azure API settings
client = OpenAI(
    api_key=api_key,
    base_url=f"{endpoint}/openai/deployments/{deployment_name}",
    default_headers={"api-key": api_key}
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
            api_version=api_version  # Required for Azure
        )

        for chunk in stream:
            text = chunk.choices[0].delta.content or ""
            yield text  # Yielding chunks for streaming

    except Exception as e:
        yield f"Error: {str(e)}"
