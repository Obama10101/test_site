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
html_prompt = "Write basic HTML code for a responsive website homepage with a navbar, hero section, and footer. Link CSS and JS files."
css_prompt = "Write clean and modern CSS styling for a simple responsive website with a navbar, hero section, and footer."
js_prompt = "Write minimal JavaScript code to toggle a responsive mobile navigation menu."

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
