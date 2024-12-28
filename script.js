// Store the button as a variable
let rain_button = document.querySelector('#rain-button');
let fireplace_button = document.querySelector('#fireplace-button');
let coffee_shop_button = document.querySelector('#coffee_shop-button');

// Map each button ID to it's sound file
const sounds = {
    'rain-button': './audio/rain-audio.wav',
    'fireplace-button': './audio/fireplace-audio.mp3',
    'coffee_shop-button': './audio/coffee_shop-audio.mp3'
};


// Attach a click eventlistener to each button
Object.keys(sounds).forEach(buttonId => {
    const button = document.querySelector(`#${buttonId}`);
    if (button) { // Check if the button exists
        button.addEventListener('click', function() {
            playSound(sounds[buttonId]);
        });
    } else {
        console.warn(`Button with ID "${buttonId}" not found.`);
    }
});

// Common function to play sound
function playSound(src) {
    const sound = new Howl({
        src: [src],
        loop: true,
        volume: 1
    });
    sound.play();
}

// list of all sliders
let sliders = document.querySelectorAll('.slider');
// loop through the list, add event listener
for(let i=0; i < sliders.length; i++){
    sliders[i].addEventListener('click', ()=>{
        console.log(sliders[i].value);
    });
}
