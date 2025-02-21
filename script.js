const sounds = {
    A: "kick.mp3",
    S: "snare.mp3",
    D: "hihat.mp3",
    F: "toms1.mp3",
    G: "toms2.mp3",
    H: "crash.mp3",
    J: "ride.mp3"
};

let currentAudio = null;

function playSound(key) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    if (sounds[key]) {
        currentAudio = new Audio(sounds[key]);
        currentAudio.play();
    }
}

document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", () => {
        playSound(drum.getAttribute("data-key"));
    });
});

document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    if (sounds[key]) {
        playSound(key);
    }
});
