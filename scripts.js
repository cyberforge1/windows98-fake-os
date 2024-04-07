import { currentTime } from './time-module.js';

// JS VARIABLE ASSIGNMENT

const startButton = document.getElementById('startButton')
const startMenu = document.getElementById('startMenu')

const closeButtonOne = document.getElementById('closeButtonOne')
const closeButtonTwo = document.getElementById('closeButtonTwo')
const closeButtonThree = document.getElementById('closeButtonThree')

const appOneImage = document.getElementById('appOneCard').querySelector('img');
const appTwoImage = document.getElementById('appTwoCard').querySelector('img');
const appThreeImage = document.getElementById('appThreeCard').querySelector('img');


// START MENU VISIBILITY TOGGLE

const toggleStartMenu = () => {
    if (startMenu.style.display === 'none') {
        startMenu.style.display = 'flex';
    } else {
        startMenu.style.display = 'none';
    }
}

startButton.addEventListener('click', toggleStartMenu);

// MODALS


document.getElementById('appOneCard').addEventListener('dblclick', function() {
    document.getElementById('myModal').showModal();
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').close();
});







// DISPLAY THE CLOCK

const updateClock = () => {
    const formattedTime = currentTime();
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.innerText = formattedTime;
};

setInterval(updateClock, 1000);

updateClock();




function initializeCalculator() {
    const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const numberOfRows = Math.ceil(buttonArr.length / 4);
    const calculatorBody = document.querySelector('#calculatorBody');
    const calculatorInput = document.querySelector('#calculatorInput');

    // Function to create rows and buttons
    let createRowAndButtons = () => {
        let index = 0;
        for (let i = 0; i < numberOfRows; i++) {
            const newCalculatorRow = document.createElement('div');
            calculatorBody.appendChild(newCalculatorRow);
            const buttonsInRow = Math.min(buttonArr.length - index, 4);

            for (let j = 0; j < buttonsInRow; j++) {
                const newButton = document.createElement('button');
                newButton.innerText = buttonArr[index];
                newCalculatorRow.appendChild(newButton);
                newButton.addEventListener('click', () => {
                    // Implement button functionality
                    if(newButton.innerText === 'AC') {
                        calculatorInput.value = '';
                    } else {
                        calculatorInput.value += newButton.innerText;
                    }
                });
                index++;
            }
        }
    };

    createRowAndButtons();
}

// Call `initializeCalculator` when the appropriate modal or section is opened
document.getElementById('appThreeCard').addEventListener('dblclick', function() {
    document.getElementById('myModal').showModal();
    initializeCalculator(); // Initialize the calculator when the modal is shown
});