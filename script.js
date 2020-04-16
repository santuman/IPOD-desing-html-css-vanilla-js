const nextBtn = document.getElementById("next");
const playBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const audio = document.getElementById("audio");
const screen = document.getElementById("screen");
// const cover = document.getElementById("screen-img");
// Song titles
const songs = ["hey", "summer", "ukulele"];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  audio.src = `music/${song}.mp3`;
  screen.style.backgroundImage = `url(./images/${song}.jpg)`;
}

// Play song
function playSong() {
  screen.classList.add("isPlaying");
  audio.play();
}

// Pause song
function pauseSong() {
  screen.classList.remove("isPlaying");

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = screen.classList.contains("isPlaying");

  if (isPlaying) {
    playBtn.setAttribute("src", "./assets/play-128.png");
    pauseSong();
  } else {
    playBtn.setAttribute("src", "./assets/pause-128.png");
    playSong();
  }
});

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
