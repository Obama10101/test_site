import anthropic
import os

client = anthropic.Anthropic(api_key=os.getenv"REMOVED_API_KEY")

def generate_code(prompt):
    message = client.messages.create(
        model="claude-3-7-sonnet-20250219",
        max_tokens=2000,
        temperature=0.5,
        messages=[{"role": "user", "content": prompt}]
    )
    return message.content[0].text

# Example prompts
html_prompt = "Write detailed HTML code for a unique, responsive webpage featuring a top navigation bar, an engaging hero section introducing the concept of a public 'live-forever' textbox, and a footer. Include a prominently placed interactive textbox in the hero section, clearly labeled 'Type something, and it'll live forever!'. Below it, add a live countdown timer starting from 30 minutes, clearly visible and styled creatively. Properly link 'style.css' for styling and 'script.js' for interactive JavaScript functionality."
css_prompt = "Write clean, modern, and creative CSS styling for a responsive webpage containing a stylish navigation bar, visually appealing hero section, and concise footer. Use vibrant gradients, subtle animations, and smooth transitions to emphasize interactivity. Highlight the live public textbox prominently, ensuring it's inviting and user-friendly. Style a visually dynamic countdown timer beneath the textbox, using large numbers and contrasting colors, making it eye-catching and easily readable on all devices."
js_prompt = "Write clear, minimal, and efficient JavaScript code that toggles a responsive mobile navigation menu on click. Additionally, implement functionality for a public textbox where users can type messages that remain visible indefinitely (persisted using localStorage). Include a JavaScript countdown timer that visibly counts down from 30 minutes, resetting automatically once it reaches zero."


# Generate and save HTML
with open("index.html", "w", encoding="utf-8") as html_file:
    html_file.write(generate_code(html_prompt))

# Generate and save CSS
with open("style.css", "w", encoding="utf-8") as css_file:
    css_file.write(generate_code(css_prompt))

# Generate and save JS
with open("script.js", "w", encoding="utf-8") as js_file:
    js_file.write(generate_code(js_prompt))

print("Website code generated successfully!")
