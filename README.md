# Tic-Tac-Toe Browser Extension 🎮

A beautiful, interactive Tic-Tac-Toe game browser extension with dark/light theme support and persistent settings.

## Features ✨

- **Classic Tic-Tac-Toe gameplay** - Play against a friend locally
- **Theme switching** - Toggle between light and dark themes
- **Persistent settings** - Theme preference saved across sessions
- **Modern UI** - Gradient backgrounds, smooth animations, and hover effects
- **Responsive design** - Optimized for browser extension popup size

## Installation 📦

### Install from Mozilla Firefox Add-ons 🎉

We're live! 🚀 The extension is now officially available on the Mozilla Firefox Add-ons store:

🦊 **[Get it on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tic-tac-toe-gamify/)** ⭐

Just one click and you're ready to play! No more manual installation needed for Firefox users.

### Load as Unpacked Extension (Development)

1. Clone or download this repository
2. Open your browser's extension management page:
   - **Chrome/Edge**: `chrome://extensions/` or `edge://extensions/`
   - **Firefox**: `about:debugging#/runtime/this-firefox`

3. **For Chrome/Edge:**
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked" and select the `hello-extension` folder
   
4. **For Firefox:**
   - Click "This Firefox" in the sidebar
   - Click "Load Temporary Add-on..."
   - Navigate to the `hello-extension` folder and select `manifest-firefox.json`

5. The extension icon should appear in your browser toolbar

### Usage 🎯

1. Click the extension icon in your browser toolbar
2. The Tic-Tac-Toe game will open in a popup
3. Click any cell to make your move (X starts first)
4. Toggle between light and dark themes using the theme button
5. Click "New Game" to reset the board

## Project Structure 📁

```
browser-extension-test/
├── README.md
└── hello-extension/
    ├── manifest.json         # Chrome/Edge extension configuration (Manifest V3)
    ├── manifest-firefox.json # Firefox extension configuration (Manifest V2)
    ├── prompt.html           # Game interface
    ├── popup.js             # Game logic and functionality
    └── icon.png             # Extension icon
```

## Technical Details 🔧

- **Chrome/Edge**: Manifest V3 (latest standard)
- **Firefox**: Manifest V2 (Firefox compatibility)
- **Permissions**: `storage` (for saving theme preferences)
- **Cross-browser Storage**: Uses `browser.storage` API with Chrome fallback

### Game Features

- **Win Detection**: Checks for 3-in-a-row horizontally, vertically, and diagonally
- **Tie Detection**: Recognizes when the board is full with no winner
- **Visual Feedback**: Highlights winning cells with green background
- **Player Switching**: Alternates between X and O players automatically

### Theme System

- **CSS Variables**: Uses modern CSS custom properties for theming
- **Cross-browser Storage**: Uses `browser.storage` API with Chrome fallback
- **Smooth Transitions**: 0.3s ease transitions between themes
- **Dynamic Styling**: Real-time theme switching without page reload

## Development 🛠️

The extension uses vanilla JavaScript and CSS - no external dependencies required.

### Key Components

- `TicTacToe` class handles all game logic
- CSS variables enable easy theme customization
- Cross-browser storage API manages user preferences

## Browser Compatibility 🌐

- ✅ Google Chrome (88+)
- ✅ Microsoft Edge (88+)
- ✅ Mozilla Firefox (91+)
- ✅ Other Chromium-based browsers

## License 📄

This project is open source and available under the MIT License.
