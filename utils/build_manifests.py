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

if __name__ == "__main__":

    # Define paths
    base_dir = Path(__file__).parents[1]
    image_folder = base_dir / Path("images")
    nature_folder = image_folder / "nature"
    urban_folder = image_folder / "urban"

    # Build manifests
    write_manifest(nature_folder, Path("../app/data/nature_images.json"))
    write_manifest(urban_folder, Path("../app/data/urban_images.json"))
