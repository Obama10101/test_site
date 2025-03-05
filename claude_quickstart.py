import anthropic
import os

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY", "REMOVED_API_KEY"))

message = client.messages.create(
    model="claude-3-7-sonnet-20250219",
    max_tokens=1000,
    temperature=1,
    system="You are a world-class poet. Respond only with short poems.",
    messages=[
        {"role": "user", "content": "Why is the ocean salty?"}
    ]
)

for content_block in message.content:
    print(content_block.text)
