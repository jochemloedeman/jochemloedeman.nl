import hashlib
from pathlib import Path
import json # Added import

from PIL import Image

LIGHTBOX_RATIO = 0.4
THUMBNAIL_RATIO = 0.24

if __name__ == "__main__":
    # Define paths
    base_dir = Path(__file__).parents[1]
    image_folder = base_dir / "images"
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


    # Find the original image files based on the hashed names
    # This requires a way to map hashed names back to original names or searching all original files
    # For simplicity, this script assumes original files are named in a way that can be derived or found.
    # This part of the logic needs to be adjusted based on how original image files are stored and named.
    # Assuming the filenames in the JSON are the *hashed* filenames.
    # We need to find the original files that correspond to these hashes.
    # This is a placeholder for the logic to find original images.
    # For this example, let's assume the JSON files contain original filenames (e.g., "my_photo.jpg")
    # and we hash them here. If they are already hashed, this step is different.

    # Let's refine the process: the JSON files should contain the *original* filenames.
    # The script will then find these in the `images` folder, hash their stems, and process them.
    # This means the JSON files need to be updated if they currently contain hashed names.
    # For now, I will assume the JSON files contain *hashed* filenames as per the original HTML.
    # The script will look for these hashed filenames (without extension) in the main `images` folder.
    # This is likely incorrect, as the `images` folder contains original names.

    # Corrected approach: The JSON files list the *hashed* filenames (e.g., '3f5d503317090d574dd337b962c4de55.jpg').
    # The script needs to find the *original* image in the `image_folder` that corresponds to this hash.
    # This requires either:
    # 1. The JSON lists original filenames, and we hash them here.
    # 2. We iterate all images in `image_folder`, hash them, and see if they are in `image_filenames`.

    # Let's go with option 2, as it's more robust if the JSON contains hashed names.
    
    all_original_images = list(image_folder.glob("*.j*pg"))
    images_to_process = []

    for original_image_path in all_original_images:
        original_stem_hash = hashlib.md5(original_image_path.stem.encode()).hexdigest()
        # Check if this hash (with .jpg extension) is in our list from JSON files
        if f"{original_stem_hash}.jpg" in image_filenames:
            images_to_process.append(original_image_path)

    if not images_to_process:
        print("No images found to process. Check if JSON files list correct hashed filenames and original images exist.")
        exit()
    
    print(f"Found {len(images_to_process)} images to process.")

    for index, image_path in enumerate(images_to_process):
        # The hashed name is derived from the original image's stem
        hashed_stem = hashlib.md5(image_path.stem.encode()).hexdigest()
        
        # Create lightbox version
        with Image.open(image_path) as img:
            width, height = img.size
            new_height = int(height * LIGHTBOX_RATIO)
            new_width = int(width * LIGHTBOX_RATIO)
            img = img.resize((new_width, new_height))
            img.save(lightbox_folder / f"{hashed_stem}.jpg")

        # Create thumbnail version
        with Image.open(image_path) as img:
            width, height = img.size
            new_height = int(height * THUMBNAIL_RATIO)
            new_width = int(width * THUMBNAIL_RATIO)
            img = img.resize((new_width, new_height))
            img.save(thumbnail_folder / f"{hashed_stem}.jpg")
        
        print(f"Processed {index + 1}/{len(images_to_process)}: {image_path.name} -> {hashed_stem}.jpg")

    print("Image preparation complete.")
