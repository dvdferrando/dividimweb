#!/usr/bin/env python3
"""Genera favicon i icones d'app des de public/dividim_logo.png (retall quadrat centrat)."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "dividim_logo.png"


def main() -> None:
    if not SRC.is_file():
        raise SystemExit(f"No trobo {SRC}")

    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    img = img.crop((left, top, left + side, top + side))

    app = ROOT / "app"
    img512 = img.resize((512, 512), Image.Resampling.LANCZOS)
    img512.save(app / "icon.png", optimize=True)

    img180 = img.resize((180, 180), Image.Resampling.LANCZOS)
    img180.save(app / "apple-icon.png", optimize=True)

    img32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    img16 = img.resize((16, 16), Image.Resampling.LANCZOS)
    img32.save(
        app / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32)],
        append_images=[img16],
    )

    print(f"Generat des de {SRC.relative_to(ROOT)}: icon.png, apple-icon.png, favicon.ico")


if __name__ == "__main__":
    main()
