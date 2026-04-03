# /// script
# dependencies = ["pillow==10.4.0"]
# requires-python = ">=3.12"
# ///

from pathlib import Path
import json

from PIL import Image

LIGHTBOX_RATIO = 0.4
THUMBNAIL_RATIO = 0.24

if __name__ == "__main__":
    # Define paths
    base_dir = Path(__file__).parents[1]
    image_folder = base_dir / "images"
    nature_folder = image_folder / "nature"  # Added nature images folder
    urban_folder = image_folder / "urban"  # Added urban images folder
    app_image_folder = base_dir / "app" / "images"
    data_folder = base_dir / "app" / "data" # Added data folder path
    lightbox_folder = app_image_folder / "lightbox"
    thumbnail_folder = app_image_folder / "thumbnail"

    # Create output directories if they don't exist
    app_image_folder.mkdir(exist_ok=True)
    lightbox_folder.mkdir(exist_ok=True)
    thumbnail_folder.mkdir(exist_ok=True)

    # Read image lists from JSON files
    urban_images_path = data_folder / "urban_images.json"
    nature_images_path = data_folder / "nature_images.json"

    image_filenames = []
    if urban_images_path.exists():
        with open(urban_images_path, 'r') as f:
            image_filenames.extend(json.load(f))
    
    if nature_images_path.exists():
        with open(nature_images_path, 'r') as f:
            image_filenames.extend(json.load(f))
    
    # Deduplicate image filenames, in case some images are in multiple lists
    image_filenames = list(set(image_filenames))

    # Now, image_filenames contains the original filenames (e.g., "my_photo.jpg")
    images_to_process = []
    for filename in image_filenames:
        # Check in nature folder first
        nature_path = nature_folder / filename
        urban_path = urban_folder / filename
        
        if nature_path.exists():
            images_to_process.append(nature_path)
        elif urban_path.exists():
            images_to_process.append(urban_path)
        else:
            print(f"Warning: {filename} not found in {nature_folder} or {urban_folder}")

    if not images_to_process:
        print("No images found to process. Check if JSON files list correct filenames and original images exist.")
        exit()
    
    print(f"Found {len(images_to_process)} images to process.")

    for index, image_path in enumerate(images_to_process):
        # Use the original filename for output
        output_name = image_path.name
        
        # Create lightbox version
        with Image.open(image_path) as img:
            width, height = img.size
            new_height = int(height * LIGHTBOX_RATIO)
            new_width = int(width * LIGHTBOX_RATIO)
            img = img.resize((new_width, new_height))
            img.save(lightbox_folder / output_name)

        # Create thumbnail version
        with Image.open(image_path) as img:
            width, height = img.size
            new_height = int(height * THUMBNAIL_RATIO)
            new_width = int(width * THUMBNAIL_RATIO)
            img = img.resize((new_width, new_height))
            img.save(thumbnail_folder / output_name)
        
        print(f"Processed {index + 1}/{len(images_to_process)}: {image_path.name}")

    print("Image preparation complete.")

