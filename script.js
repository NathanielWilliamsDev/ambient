// Defining a sound


// Playing sound
let rain_button = document.querySelector('.sound-button');

rain_button.addEventListener('click', () => {
    const sound = new Howl({
        src: ['./audio/rain-audio.wav'],
        loop: true, //Optional (makes sound loop)
        volume: 1 //Optional (sets the volume from 0 to 1)
    });
    sound.play();

})