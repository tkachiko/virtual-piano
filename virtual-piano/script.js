<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> refactor: change structure of the project
const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");
const fullscreen = document.querySelector(".fullscreen");
const btnNotes = document.querySelector(".btn-notes");
const btnLetters = document.querySelector(".btn-letters");
<<<<<<< HEAD
let isPressed = false;

const playAudio = (src) => {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
};

const playNote = (event) => {
  isPressed = true;
  const note = event.target.dataset.note;
  const src = `assets/audio/${note}.mp3`;
  const key = document.querySelector(`.piano-key[data-note="${note}"]`);

  if (event.target.classList.contains("piano-key")) {
    playAudio(src);
    key.classList.add("piano-key-active-pseudo", "piano-key-active");
  }
};

const playKey = (event) => {
  pianoKeys.forEach((key) => {
    const note = key.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    if (!src) return;
    if (event.repeat) return;
    if (event.code.length === 4) {
      if (event.code[3] === key.dataset.letter) playAudio(src);
    }
  });

  const key = document.querySelector(
    `.piano-key[data-letter="${event.code[3]}"]`
  );
  if (!key) return;
  if (event.code.length === 4) {
    key.classList.add("piano-key-active-pseudo", "piano-key-active");
  }
};

const switchToLetters = () => {
  btnLetters.classList.add("btn-active");
  pianoKeys.forEach((key) => key.classList.add("letter"));
  btnNotes.classList.remove("btn-active");
};

const switchToNotes = () => {
  btnNotes.classList.add("btn-active");
  pianoKeys.forEach((key) => key.classList.remove("letter"));
  btnLetters.classList.remove("btn-active");
};

const removeActive = () => {
  pianoKeys.forEach((key) =>
    key.classList.remove("piano-key-active-pseudo", "piano-key-active")
  );
};

const togglefullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

piano.addEventListener("mousedown", playNote);
piano.addEventListener("mouseover", function (e) {
  if (isPressed !== true) return;
  removeActive();
  playNote(e);
});
window.addEventListener("mouseup", () => {
  isPressed = false;
  removeActive();
});
window.addEventListener("keydown", playKey);
window.addEventListener("keyup", () => {
  removeActive();
});

fullscreen.addEventListener("click", togglefullscreen);

btnNotes.addEventListener("click", switchToNotes);
btnLetters.addEventListener("click", switchToLetters);
=======
const piano = document.querySelector('.piano')
const pianoKeys = document.querySelectorAll('.piano-key')
const fullscreen = document.querySelector('.fullscreen')
=======
const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const fullscreen = document.querySelector('.fullscreen');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> feat: implement audio playback on keydown event in script.js
=======
const btnNotes = document.querySelector('.btn-notes')
const btnLetters = document.querySelector('.btn-letters')
>>>>>>> feat: implement switching between notes/letters modes in script.js
=======
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
=======
>>>>>>> refactor: change structure of the project
let isPressed = false;
>>>>>>> refactor: change structure of the project in script.js

const playAudio = (src) => {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
};

const playNote = (event) => {
  isPressed = true;
  const note = event.target.dataset.note;
  const src = `assets/audio/${note}.mp3`;
  const key = document.querySelector(`.piano-key[data-note="${note}"]`);

  if (event.target.classList.contains("piano-key")) {
    playAudio(src);
    key.classList.add("piano-key-active-pseudo", "piano-key-active");
  }
};

const playKey = (event) => {
  pianoKeys.forEach((key) => {
    const note = key.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    if (!src) return;
    if (event.repeat) return;
    if (event.code.length === 4) {
      if (event.code[3] === key.dataset.letter) playAudio(src);
    }
  });

  const key = document.querySelector(
    `.piano-key[data-letter="${event.code[3]}"]`
  );
  if (!key) return;
  if (event.code.length === 4) {
    key.classList.add("piano-key-active-pseudo", "piano-key-active");
  }
};

const switchToLetters = () => {
  btnLetters.classList.add("btn-active");
  pianoKeys.forEach((key) => key.classList.add("letter"));
  btnNotes.classList.remove("btn-active");
};

const switchToNotes = () => {
  btnNotes.classList.add("btn-active");
  pianoKeys.forEach((key) => key.classList.remove("letter"));
  btnLetters.classList.remove("btn-active");
};

const removeActive = () => {
  pianoKeys.forEach((key) =>
    key.classList.remove("piano-key-active-pseudo", "piano-key-active")
  );
};

<<<<<<< HEAD
    this.classList.remove('piano-key-active-pseudo', 'piano-key-active');
}
<<<<<<< HEAD
>>>>>>> feat: implement audio playback on mousedown event in script.js
=======

function togglefullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
<<<<<<< HEAD
>>>>>>> feat: implement fullscreen mode in index.js
=======

piano.addEventListener('mousedown', playAudio);
piano.addEventListener('mouseover', function(e) {
    if (isPressed !== true) return;
    playAudio(e);
=======
const togglefullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

piano.addEventListener("mousedown", playNote);
piano.addEventListener("mouseover", function (e) {
  if (isPressed !== true) return;
  removeActive();
  playNote(e);
>>>>>>> refactor: change structure of the project
});
window.addEventListener("mouseup", () => {
  isPressed = false;
  removeActive();
});
window.addEventListener("keydown", playKey);
window.addEventListener("keyup", () => {
  removeActive();
});

fullscreen.addEventListener("click", togglefullscreen);

<<<<<<< HEAD
btnNotes.addEventListener('click', switchToNotes);
btnLetters.addEventListener('click', switchToLetters);
>>>>>>> refactor: change structure of the project in script.js
=======
btnNotes.addEventListener("click", switchToNotes);
btnLetters.addEventListener("click", switchToLetters);
>>>>>>> refactor: change structure of the project
