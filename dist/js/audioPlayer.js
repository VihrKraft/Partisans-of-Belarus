let buttonAP = document.querySelector('.audio-button');
let audioPlayer = document.querySelector('.audio-player');
let activated = false;


buttonAP.addEventListener('click', function () {
    if (activated == false) {
        audioPlayer.play();
        activated = true;
    } else {
        audioPlayer.pause();
        activated = false;
    }
    buttonAP.classList.toggle('active');
})