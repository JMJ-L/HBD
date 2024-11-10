document.addEventListener("DOMContentLoaded", function() {
    const surpriseButton = document.getElementById('surpriseButton');
    const messagesContainer = document.getElementById('messagesContainer');

    surpriseButton.addEventListener('click', function() {
        console.log('Button clicked!'); // Check if this message appears in the browser console when you click the button
        showMessage();
        messagesContainer.style.display = 'block'; // Show the message container when the button is clicked
    });
});

let currentMessageIndex = 0;
let fireworks;

function showMessage() {
    const messages = document.querySelectorAll('#messagesContainer .message');
    const audio = document.getElementById('birthdaySong');
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const cakeImage = document.querySelector('.cake'); // Select the cake image
    const greeting = document.getElementById('greeting'); // Select the h1 element
    const messageContainer = document.getElementById('messagesContainer'); // Select the message container
    const imageContainer = document.getElementById('imageContainer'); // Select the image container

    if (messages.length === 0) return;

    // Show the cake image
    cakeImage.classList.remove('hidden');

    // Change the content of the h1 element
    greeting.innerHTML = "Happy AnniBirthsarry!💜";

    // Reset the current message index
    currentMessageIndex = 0;

    // Show each message with a delay
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.remove('hidden');
            message.classList.add('show');
        }, 1000 * index);
    });

    // Play audio
    audio.play().catch(error => console.error('Error playing audio:', error));

    // Initialize and start fireworks
    fireworks = new Fireworks(fireworksCanvas, {
        maxRockets: 5, // max # of rockets to spawn
        rocketSpawnInterval: 150, // ms to check if new rockets should spawn
        rocketSpawnInterval: 150, // ms to check if new rockets should spawn
        numParticles: 100, // number of particles to spawn when rocket explodes
        explosionMinHeight: 0.2, // percentage. min height at which rockets can explode
        explosionMaxHeight: 0.9, // percentage. max height before a particle is exploded
        explosionChance: 0.08 // chance in each tick the rocket will explode
    });
    fireworks.start();

    // Add images
    addImages();
}

function addImages() {
    const imageContainer = document.getElementById('imageContainer');
    
    // Clear any existing images
    imageContainer.innerHTML = '';

    // Create the first img element
    const image1 = document.createElement('img');
    image1.src = 'pic1.png'; // Replace with the actual path to your first image file
    image1.style.width = '200px'; // Set the width of the image (optional)
    image1.style.margin = '10px'; // Set margin for spacing (optional)

    // Create the second img element
    const image2 = document.createElement('img');
    image2.src = 'pic2.png'; // Replace with the actual path to your second image file
    image2.style.width = '200px'; // Set the width of the image (optional)
    image2.style.margin = '10px'; // Set margin for spacing (optional)

    // Append both images to the imageContainer
    imageContainer.appendChild(image1);
    imageContainer.appendChild(image2);
}