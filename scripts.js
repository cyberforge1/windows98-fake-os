console.log('hello world')

// JS VARIABLE ASSIGNMENT

let startButton = document.getElementById('start-button')
let startMenu = document.getElementById('start-menu')

let = document.querySelectorAll('.menu-item')



// EVENT LISTENERS

startButton.addEventListener('click', toggleStartMenu);



// FUNCTION DEFINITION


// START MENU VISIBILITY TOGGLE

function toggleStartMenu() {
    // Toggle the display property of the start menu
    if (startMenu.style.display === 'none') {
        startMenu.style.display = 'flex';
    } else {
        startMenu.style.display = 'none';
    }
}