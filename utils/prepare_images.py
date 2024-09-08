from pathlib import Path
from PIL import Image

LIGHTBOX_RATIO = 0.8
THUMBNAIL_RATIO = 0.3

if __name__ == "__main__":
    # List all the images in the images folder
    image_folder = Path(__file__).parents[1] / "images"
    app_image_folder = Path(__file__).parents[1] / "app" / "images"
    lightbox_folder = app_image_folder / "lightbox"
    thumbnail_folder = app_image_folder / "thumbnail"
    app_image_folder.mkdir(exist_ok=True)
    lightbox_folder.mkdir(exist_ok=True)
    thumbnail_folder.mkdir(exist_ok=True)

    images = list(image_folder.glob("*.j*pg"))

    for index, image in enumerate(images):
        # Create lightbox version
        with Image.open(image) as img:
            width, height = img.size
            new_height = int(height * LIGHTBOX_RATIO)
            new_width = int(width * LIGHTBOX_RATIO)
            img = img.resize((new_width, new_height))
            img.save(app_image_folder / "lightbox" / f"image_{index}.jpg")

        # Create thumbnail version
        with Image.open(image) as img:
            width, height = img.size
            new_height = int(height * THUMBNAIL_RATIO)
            new_width = int(width * THUMBNAIL_RATIO)
            img = img.resize((new_width, new_height))
            img.save(app_image_folder / "thumbnail" / f"image_{index}.jpg")