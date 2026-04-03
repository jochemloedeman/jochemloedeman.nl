# /// script
# requires-python = ">=3.12"
# ///

from pathlib import Path
import json


def write_manifest(folder: Path, manifest_path: Path):
    if not folder.exists():
        print(f"Folder {folder} does not exist, skipping.")
        return
    files = sorted([f.name for f in folder.iterdir() if f.is_file()])
    with open(manifest_path, "w") as f:
        json.dump(files, f, indent=4)


def main():
    base_dir = Path(__file__).parents[1]
    image_folder = base_dir / "images"
    nature_folder = image_folder / "nature"
    urban_folder = image_folder / "urban"
    data_folder = base_dir / "app" / "data"
    data_folder.mkdir(parents=True, exist_ok=True)

    write_manifest(nature_folder, data_folder / "nature_images.json")
    write_manifest(urban_folder, data_folder / "urban_images.json")


if __name__ == "__main__":
    main()
