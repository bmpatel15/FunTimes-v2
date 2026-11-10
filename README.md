# Fun Times

A single-page hello. Enter your name and something you like to do, then submit. If both fields are filled in, the page shows a short greeting and throws a confetti burst.

## Run locally

No install and no build step. Open `index.html` in a browser.

Confetti loads from a CDN, so you need a network connection for the burst. The greeting still appears if that script cannot load.

## GitHub Pages

1. Merge this project to the `main` branch so the workflow is on the default branch.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

Pushes to `main` run [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which publishes the repository root.

Expected site: https://bmpatel15.github.io/FunTimes-v2/

If the first Actions run happened before Pages was switched to GitHub Actions, rerun that workflow after the setting is saved.
