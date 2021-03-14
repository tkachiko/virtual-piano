const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const fullscreen = document.querySelector('.fullscreen');
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
let isPressed = false;


function playAudio(event) {
    isPressed = true;
    const note = event.target.dataset.note;
    const audio = document.querySelector(`audio[data-note="${note}"]`);
    const key = document.querySelector(`.piano-key[data-note="${note}"]`);
    audio.currentTime = 0;
    audio.play();

    key.classList.add('piano-key-active-pseudo', 'piano-key-active');
}

function playOnKey(event) {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.piano-key[data-key="${event.code}"]`);
    if (!audio) return;
    if (event.repeat) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('piano-key-active-pseudo', 'piano-key-active');
}

function switchToLetters() {
    btnLetters.classList.add('btn-active');
    pianoKeys.forEach((key) => key.classList.add('letter'));
    btnNotes.classList.remove('btn-active');
}

function switchToNotes() {
    btnNotes.classList.add('btn-active');
    pianoKeys.forEach((key) => key.classList.remove('letter'));
    btnLetters.classList.remove('btn-active');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;

    this.classList.remove('piano-key-active-pseudo', 'piano-key-active');
}

function togglefullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

piano.addEventListener('mousedown', playAudio);
piano.addEventListener('mouseover', function(e) {
    if (isPressed !== true) return;
    playAudio(e);
});
piano.addEventListener('mouseup', function(e) {
    isPressed = false;
});
window.addEventListener('keydown', playOnKey);

pianoKeys.forEach((key) => key.addEventListener('transitionend', removeTransition));

fullscreen.addEventListener('click', togglefullscreen);

btnNotes.addEventListener('click', switchToNotes);
btnLetters.addEventListener('click', switchToLetters);