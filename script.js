// Store the button as a variable
let rain_button = document.querySelector('#rain-button');
let fireplace_button = document.querySelector('#fireplace-button');
let coffee_shop_button = document.querySelector('#coffee_shop-button');

// Click event listener for rain_button
rain_button.addEventListener('click', () => {
    // Create howl
    const sound = new Howl({
        src: ['./audio/rain-audio.wav'],
        loop: true, //Optional (makes sound loop)
        volume: 1 //Optional (sets the volume from 0 to 1)
    });
    sound.play(); // play sound
});

// Event listener for fireplace_button
fireplace_button.addEventListener('click', () => {
    const sound = new Howl({
        src: ['./audio/fireplace-audio.mp3'],
        loop: true, 
        volume: 1 
    });
    sound.play(); 
});

// Event listener for coffe_shop_button
coffee_shop_button.addEventListener('click', () => {
    const sound = new Howl({
        src: ['./audio/coffee_shop-audio.mp3'],
        loop: true,
        volume: 1
    });
    sound.play();
});