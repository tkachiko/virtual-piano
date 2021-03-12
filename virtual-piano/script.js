const piano = document.querySelector('.piano')
const pianoKeys = document.querySelectorAll('.piano-key')

pianoKeys.forEach(key => key.addEventListener('transitionend', removeTransition))

piano.addEventListener('mousedown', playAudio)

function playAudio(event) {
    const note = event.target.dataset.note
    const audio = document.querySelector(`audio[data-note="${note}"]`)
    const key = document.querySelector(`.piano-key[data-note="${note}"]`)
    audio.currentTime = 0
    audio.play();

    key.classList.add('piano-key-active-pseudo', 'piano-key-active');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return

    this.classList.remove('piano-key-active-pseudo', 'piano-key-active')
}