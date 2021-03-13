const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const fullscreen = document.querySelector('.fullscreen');

pianoKeys.forEach((key) => key.addEventListener('transitionend', removeTransition));

fullscreen.addEventListener('click', togglefullscreen);
piano.addEventListener('mousedown', playAudio);
window.addEventListener('keydown', playOnKey);

function playAudio(event) {
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