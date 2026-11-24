# Sara Nivas Coffee ☕

A warm, modern website for **Sara Nivas**, a specialty coffee house. Built with plain HTML, CSS and JavaScript, with no frameworks and no build step.

> **Note:** This is a simple, front-end-only project. It is a static website with no backend, no database and no server-side code. The newsletter form and the add (+) buttons are for demonstration only: they show a confirmation on the page but do not send or save any data.

## Features

- Hero section with a looping latte-art background video
- "Watch Our Story" video pop-up
- Seasonal favourites menu cards with photos and add buttons
- Story section, values strip and newsletter sign-up
- Fully responsive, with a mobile menu
- Accessible: keyboard focus styles and reduced-motion support

## Project structure

```
sara-nivas-coffee/
├── index.html        # Page markup
├── phoenix-pro.css   # All styles
├── phoenix-pro.js    # Menu, video pop-up, photo loader, newsletter
├── coffee.mp4        # Hero / story video
├── latte.jpg         # Classic Latte card
├── iced.jpg          # Iced Vanilla card
├── toast.jpg         # Avocado Toast card
├── croissant.jpg     # Almond Croissant card
├── story.jpg         # (optional) "A space for good people" section
├── .gitignore
└── README.md
```

Photos can be `.jpg`, `.jpeg`, `.png` or `.webp`. Keep the names above.

## Run locally

Open `index.html` in your browser, or use Live Preview in Phoenix Code / VS Code Live Server.

## Customise

- **Prices and names:** edit the `.card` blocks in `index.html`.
- **Colours and fonts:** change the variables at the top of `phoenix-pro.css` (`:root`).
- **Photos:** replace the image files, keeping the same names.

## Deploy with GitHub Pages

1. Push the project to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site goes live at `https://<your-username>.github.io/sara-nivas-coffee/`.

## Credits

Fonts: Cormorant Garamond and Jost (Google Fonts).

© 2026 Sara Nivas Coffee. All rights reserved.
