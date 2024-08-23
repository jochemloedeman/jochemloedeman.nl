import os

from jinja2 import Environment, FileSystemLoader

# Define the paths
images_dir = "../assets/images"
templates_dir = "../templates"
output_dir = "../"

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Load the Jinja2 environment
env = Environment(loader=FileSystemLoader(templates_dir))
template = env.get_template("index.html")

# Get the list of images
images = [
    f"/assets/images/{f}"
    for f in os.listdir(images_dir)
    if os.path.isfile(os.path.join(images_dir, f))
    and f.endswith(".jpg")
    or f.endswith(".jpeg")
]

images_left = images[0 : len(images) // 2]
images_right = images[len(images) // 2 :]

# Render the template with the images
rendered_html = template.render(images_left=images_left, images_right=images_right)

# Write the rendered HTML to a file
with open(os.path.join(output_dir, "index.html"), "w") as f:
    f.write(rendered_html)

print('Static site generated in the "output" directory.')
