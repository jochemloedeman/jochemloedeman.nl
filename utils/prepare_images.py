# /// script
# dependencies = ["pillow==10.4.0"]
# requires-python = ">=3.12"
# ///

import json
import sys
from pathlib import Path

from PIL import Image  # ty: ignore[unresolved-import]

LIGHTBOX_RATIO = 0.4
THUMBNAIL_RATIO = 0.24


def main():
    base_dir = Path(__file__).parents[1]
    image_folder = base_dir / "images"
    nature_folder = image_folder / "nature"
    urban_folder = image_folder / "urban"
    app_image_folder = base_dir / "app" / "images"
    data_folder = base_dir / "app" / "data"
    lightbox_folder = app_image_folder / "lightbox"
    thumbnail_folder = app_image_folder / "thumbnail"

    app_image_folder.mkdir(exist_ok=True)
    lightbox_folder.mkdir(exist_ok=True)
    thumbnail_folder.mkdir(exist_ok=True)

    urban_images_path = data_folder / "urban_images.json"
    nature_images_path = data_folder / "nature_images.json"

    image_filenames = []
    if urban_images_path.exists():
        with open(urban_images_path, "r") as f:
            image_filenames.extend(json.load(f))

    if nature_images_path.exists():
        with open(nature_images_path, "r") as f:
            image_filenames.extend(json.load(f))

    image_filenames = list(set(image_filenames))

    images_to_process = []
    for filename in image_filenames:
        nature_path = nature_folder / filename
        urban_path = urban_folder / filename

        if nature_path.exists():
            images_to_process.append(nature_path)
        elif urban_path.exists():
            images_to_process.append(urban_path)
        else:
            print(f"Warning: {filename} not found in {nature_folder} or {urban_folder}")

    if not images_to_process:
        print(
            "No images found to process. Check if JSON files list correct filenames and original images exist."
        )
        sys.exit(1)

    print(f"Found {len(images_to_process)} images to process.")

    for index, image_path in enumerate(images_to_process):
        output_name = image_path.name

        with Image.open(image_path) as img:
            width, height = img.size
            lightbox = img.resize(
                (int(width * LIGHTBOX_RATIO), int(height * LIGHTBOX_RATIO)),
                Image.LANCZOS,
            )
            lightbox.save(lightbox_folder / output_name)
            thumbnail = img.resize(
                (int(width * THUMBNAIL_RATIO), int(height * THUMBNAIL_RATIO)),
                Image.LANCZOS,
            )
            thumbnail.save(thumbnail_folder / output_name)

        print(f"Processed {index + 1}/{len(images_to_process)}: {image_path.name}")

    print("Image preparation complete.")


if __name__ == "__main__":
    main()
