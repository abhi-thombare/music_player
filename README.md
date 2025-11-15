# 🎧 Modern Music Player  
A clean and minimal **HTML + CSS + JavaScript** music player that supports play, pause, next/previous track, and an interactive progress bar.  
Fully responsive and perfect for beginners who want to upload JavaScript projects on GitHub.

---

## 🚀 Features

- ▶ Play / ⏸ Pause music  
- ⏮ Previous & ⏭ Next track  
- 🎵 Displays current song name  
- 📊 Interactive progress/seek bar  
- 🔊 Auto updates progress  
- 🌈 Stylish Glassmorphism UI  
- 📱 Fully responsive

---

## 📁 Project Folder Structure

music-player/
│
├── index.html
├── style.css
├── script.js
│
└── songs/
├── song1.mp3
├── song2.mp3
└── song3.mp3

---

## 🎶 How to Add Songs

1. Create a folder named **songs**
2. Put all your `.mp3` files in that folder  
3. Make sure to update the paths in `script.js`:

```js
let songs = [
    { name: "Song 1", src: "songs/song1.mp3" },
    { name: "Song 2", src: "songs/song2.mp3" },
    { name: "Song 3", src: "songs/song3.mp3" }
];
