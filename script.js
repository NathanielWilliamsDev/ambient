// Store the button as a variable
let rain_button = document.querySelector('#rain-button');
let fireplace_button = document.querySelector('#fireplace-button');
let coffee_shop_button = document.querySelector('#coffee_shop-button');

// Mapping sounds (id in HTML) to audio file paths
const sounds = {
        'rain': './audio/rain-audio.wav',
        'campfire': './audio/campfire-audio.mp3',
        'coffee_shop': './audio/coffee_shop-audio.mp3'
};

// Common function to play sound
function playSound(src, volume) {
    const sound = new Howl({
        src: [src],
        loop: true,
        volume: volume
    });
    sound.play();
}

// list of all sliders
let sliders = document.querySelectorAll('.slider');
// loop through the list, add event listener
for(let i=0; i < sliders.length; i++){
    sliders[i].addEventListener('input', ()=>{
        console.log(sliders[i].value);
        console.log((sliders[i].value)/100);
        playSound(sounds[sliders[i].id], (sliders[i].value)/100);
        
    });
}
