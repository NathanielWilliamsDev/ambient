// Defining a sound
const sound = new Howl({
    src: ['/audio/rain-audio.wav'],
    loop: true, //Optional (makes sound loop)
    volume: 1 //Optional (sets the volume from 0 to 1)
});

// Playing sound
let rain_button = document.querySelector('.sound-button');
console.log(rain_button);

rain_button.addEventListener('click', () => {
    sound.play();
})