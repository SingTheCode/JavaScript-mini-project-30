"use strict";
let pressKey = "";
let currentAudio = "";
const audio = document.querySelector("audio");

function playAudio() {
  audio.volume = 0.2;
  audio.loop = false;
  audio.play();
}

function loadAudio(event) {
  audio.src = `asset/${event.key}.mp3`;
  console.log(audio.src);
  audio.load();
  playAudio();
}

function addClass(event) {
  const box = document.getElementById(`${event.key}`);
  box.classList.add("pressed");
}

function deleteClass(event) {
  const box = document.getElementById(`${event.key}`);
  box.classList.remove("pressed");
}
window.addEventListener("keydown", (e) => {
  loadAudio(e);
  addClass(e);
});

window.addEventListener("keyup", (e) => {
  deleteClass(e);
});
