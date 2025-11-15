// SONG LIST (Add mp3 files in your folder)
let songs = [
    { name: "Song 1", src: "songs/song1.mp3" },
    { name: "Song 2", src: "songs/song1.mp3" },
    { name: "Song 3", src: "songs/song1.mp3" }
];

let currentSong = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("songTitle");
let progress = document.getElementById("progress");
let playBtn = document.getElementById("playBtn");

// Load Song
function loadSong(index) {
    audio.src = songs[index].src;
    title.innerText = songs[index].name;
}

loadSong(currentSong);

// Play/Pause
function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
}

// Next Song
function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audio.play();
    playBtn.innerText = "⏸";
}

// Prev Song
function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audio.play();
    playBtn.innerText = "⏸";
}

// Progress bar update
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

// Seek music
function seekMusic() {
    audio.currentTime = (progress.value * audio.duration) / 100;
}
