
const countButton = document.getElementById("count-button");
countButton.addEventListener("click", function() {
    const count = document.getElementById("count");
    let countNumber = Number(count.innerHTML);
    countNumber++;
    count.innerHTML = countNumber;
    console.log(countNumber);

    if (countNumber === 5) {
        alert("Gözlerini Dinlendir");
    }
});


const audioControls = [
    { icon: document.getElementById("rainIcon"), audio: document.getElementById("rainAudioPlay") },
    { icon: document.getElementById("seaIcon"), audio: document.getElementById("seaAudioPlay") },
    { icon: document.getElementById("metalSlugIcon"), audio: document.getElementById("metalSlugAudioPlay") }
];


audioControls.forEach(control => {
    control.icon.addEventListener("click", function() {
        if (control.audio.paused) {
            control.audio.play();
            control.icon.className = "fa-solid fa-music"; 
        } else {
            control.audio.pause();
            control.icon.className = "fa-solid fa-cloud-rain"; 
        }
    });
});


const volumeInput = document.getElementById("volume-input");
volumeInput.addEventListener("input", function() {
    const volume = volumeInput.value;
    audioControls.forEach(control => {
        control.audio.volume = volume;
    });
});
