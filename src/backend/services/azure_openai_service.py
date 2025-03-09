import os
from openai import OpenAI
from flask import stream_with_context

# Ensure API key is set
api_key = os.environ.get("AZ_OPENAI_API_KEY")
if not api_key:
    raise ValueError("AZ_OPENAI_API_KEY environment variable is missing!")

client = OpenAI(api_key=api_key)


def get_completion_stream(prompt, model="gpt-35-turbo-16k"):
    """
    Calls OpenAI API synchronously and streams responses.
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
