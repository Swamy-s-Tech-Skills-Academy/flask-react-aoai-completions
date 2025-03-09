import os
from openai import OpenAI
from flask import Response, stream_with_context
from asgiref.sync import async_to_sync

# Ensure API key is set
api_key = os.environ.get("AZURE_OPENAI_API_KEY")
if not api_key:
    raise ValueError("AZURE_OPENAI_API_KEY environment variable is missing!")

client = OpenAI(api_key=api_key)


def get_completion_stream(prompt, model="gpt-4o"):
    """
    Calls OpenAI API and streams responses.
    Flask doesn't support async, so we handle it synchronously.
    """
    try:
        stream = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model=model,
            stream=True,
        )

        for chunk in stream:
            text = chunk.choices[0].delta.content or ""
            yield text  # Yielding chunks for streaming

    except Exception as e:
        yield f"Error: {str(e)}"


def stream_response(prompt):
    """
    Flask-compatible streaming response.
    Uses `stream_with_context()` to handle response streaming properly.
    """
    return Response(
        stream_with_context(get_completion_stream(prompt)),
        content_type="text/event-stream"
    )
