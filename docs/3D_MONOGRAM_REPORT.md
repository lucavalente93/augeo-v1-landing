# 3D Monogram & Immersive Stage Report

**Date:** 2026-10-27  
**Author:** Luca Valente & Antigravity  
**Branch:** `v5` (promoted to `main`)  
**Component:** `src/components/BrandImmersiveStage.tsx`

---

## 1. Overview & Context

This report documents the integration of AUGEO's 3D brand monogram assets into the web landing page, the dimensional trade-offs of the full-bleed equilateral stage layout, and the production-ready prompt specifications for generating future asset revisions (including missing light-mode specular variations) once generation quotas renew.

---

## 2. Dimensional Analysis & Responsive Crop Behavior

### Native Source Dimensions
The current raster assets in `src/assets/logo/3d/` share a strict **16:9 aspect ratio (1.777:1)**:
* `augeo-169-black`: 1376 × 768 (1.0 MB)
* `augeo-169-black-4k`: 5504 × 3072 (14.5 MB master)
* `augeo-169-white`: 2752 × 1536 (4.6 MB master)
* `augeo-169-white-invert`: 2752 × 1536 (4.8 MB master)

### Layout Geometry vs. Asset Framing
The layout implementation (`.brand-stage-monolith`) fills the viewport horizontally (`width: 100%`) in direct equilateral continuation with the `ProcessSection` grid (`16%, 30%, 44%, 58%, 72%, 86%`).

* **Desktop Viewport (1440px to 1920px+):**
  * Stage height is set to `clamp(520px, 72vh, 900px)`.
  * At 1440 × 900, container height is ~648px ($1440 / 648 \approx 2.22:1$, approximately **20:9 to 21:9 ultrawide**).
  * Because the original renders were framed tightly (monogram reaching within ~4% of the top border and ~5% of the bottom border), expanding the image to fill a 2.22:1 container via `object-fit: cover` causes the top cylinder apex and lowest foot chamfer to be cropped by approximately **10% to 12%**.
* **Mobile Viewport (390 × 844):**
  * Stage height is set to `clamp(340px, 52vh, 460px)` (~0.88:1 portrait container).
  * Filling the vertical container crops the left and right outer shoulders of the 16:9 image by ~40%, displaying the central structural arch.

### Safe-Zone Recommendations for Re-Generation
1. **Camera Pull-Back (Safe Zone):** Zoom the virtual camera out by **25% to 30%**. The monogram should occupy ~65% to 70% of the canvas height, providing generous negative space around all four edges.
2. **Native Aspect Ratio:** Generate in **21:9 (2.39:1)** for dedicated desktop banners (e.g. 3840 × 1600 or 2560 × 1080), or retain **16:9** with the 25% safe margin so that CSS `object-fit: cover` never clips the geometry.

---

## 3. WebP Delivery Pipeline

The raw 4K/2K PNGs (~25 MB total) were downsampled to modern high-density WebP files in `src/assets/logo/3d/webp/`:
* `augeo-3d-black-2k.webp`: 2752 × 1536 (103 kB)
* `augeo-3d-white-2k.webp`: 2752 × 1536 (108 kB)
* `augeo-3d-white-invert-2k.webp`: 2752 × 1536 (123 kB)
* `augeo-3d-black-mobile.webp`: 688 × 384 (7.1 kB)
* `augeo-3d-white-mobile.webp`: 688 × 384 (8.0 kB)
* `augeo-3d-white-invert-mobile.webp`: 688 × 384 (8.5 kB)

---

## 4. Prompts for Re-Generating Monograms (Magnific / Midjourney / 3D AI)

### Core Camera & Geometry Seed (Shared Across All Variants)
> `Stationary architectural studio camera, 3/4 low-angle upward perspective, 50mm focal length, orthographic tilt-shift precision, monumental geometric monogram sculpture of the letter "a", sharp chamfered beveled edges, Bauhaus constructivism meets brutalist minimalism, architectural model photograph, Hasselblad H6D-100c medium format clarity, 8k resolution, ultra-clean geometry, safe-zone framing with 25% negative space around object.`

---

### A. Light Mode — Base Variant (Black Monogram on Light Stone)
* **Status:** Existing (needs safe-zone re-generation).
* **Prompt:**
  > `Stationary architectural studio camera, 3/4 low-angle upward perspective, monumental geometric extruded monogram sculpture of the letter "a", solid matte obsidian black material with smooth satin finish, clean micro-chamfered edges catching soft directional studio light, deep charcoal shading on sidewalls. Isolated on a seamless solid warm off-white limestone background (hex #EBEAD8, Pantone Warm Gray 1 C), soft ambient ground occlusion shadow, diffuse natural overhead softbox lighting, 8k resolution, Hasselblad medium format, ultra-crisp beveled geometry, 25% safe margin framing.`
* **Negative Prompt:**
  > `glossy chrome, reflection, lens flare, colorful background, texture noise, grain, text, typography, blur, distortion, organic curves, scratches, dust, imperfections.`

---

### B. Light Mode — Invert / Negative Variant (Specular Bevel Reflections)
* **Status:** Missing (enables specular reflection sweep in Light Mode).
* **Prompt:**
  > `Stationary architectural studio camera, identical 3/4 low-angle upward perspective, monumental geometric extruded monogram sculpture of the letter "a". The front faces remain deep matte obsidian black, but the extruded vertical sidewalls and chamfered bevels catch intense directional silver-white rim specular highlights, creating a stark inverted chiaroscuro reflection sweep along the extrusion walls. Solid warm off-white limestone background (hex #EBEAD8), high-contrast architectural lighting, crisp bevel illumination, medium format photography, 8k resolution, 25% safe margin framing.`
* **Negative Prompt:**
  > `colored lights, neon, lens flare, distortion, organic deformation, background texture, vignette, dirty surfaces, text, watermark.`

---

### C. Dark Mode — Base Variant (Silver-White Front Faces)
* **Status:** Existing (needs safe-zone re-generation).
* **Prompt:**
  > `Stationary architectural studio camera, identical 3/4 low-angle upward perspective, monumental geometric extruded monogram sculpture of the letter "a". Front curved surfaces finished in luminous bead-blasted satin silver-white aluminum, catching smooth diffuse top lighting; vertical extruded sidewalls cast in deep shadow and dark graphite tones. Background is a seamless pure OLED dark black (hex #020304) with subtle dark ambient gradient, crisp chamfered edge highlights, 8k resolution, cinematic architectural monumentality, 25% safe margin framing.`
* **Negative Prompt:**
  > `white background, bright sidewalls, colored lights, lens flare, noise, compression artifacts, text, logo.`

---

### D. Dark Mode — Invert / Negative Variant (Specular Sidewalls Illuminated)
* **Status:** Existing (needs safe-zone re-generation).
* **Prompt:**
  > `Stationary architectural studio camera, identical 3/4 low-angle upward perspective, monumental geometric extruded monogram sculpture of the letter "a". The front curved surfaces are inverted into dark polished obsidian with micro-rim specular highlights, while the vertical extruded sidewalls and architectural bevels are brilliantly illuminated in crisp specular silver-white. Pitch black OLED background (hex #020304), intense dramatic side-lighting sweep, chiaroscuro contrast, 8k resolution, Hasselblad medium format, 25% safe margin framing.`
* **Negative Prompt:**
  > `white background, light leaks, chromatic aberration, low resolution, soft edges, blur, text, watermark.`
