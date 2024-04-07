import { currentTime } from './time-module.js';

// JS VARIABLE ASSIGNMENT

const startButton = document.getElementById('startButton')
const startMenu = document.getElementById('startMenu')



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









// DISPLAY THE CLOCK

const updateClock = () => {
    const formattedTime = currentTime();
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.innerText = formattedTime;
};

setInterval(updateClock, 1000);

updateClock();




const initializeCalculator = () => {
    const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const numberOfRows = Math.ceil(buttonArr.length / 4);
    const calculatorBody = document.querySelector('#calculatorBody');
    const calculatorInput = document.querySelector('#calculatorInput');

    calculatorBody.innerHTML = '';

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
document.getElementById('calculatorCard').addEventListener('dblclick', function() {
    document.getElementById('calculatorModal').showModal();
    initializeCalculator(); // Initialize the calculator when the modal is shown
});


document.getElementById('closeWeatherModal').addEventListener('click', function() {
    document.getElementById('weatherModal').close();
});

document.getElementById('closeCalculatorModal').addEventListener('click', function() {
    document.getElementById('calculatorModal').close();
});

document.getElementById('closeNotesModal').addEventListener('click', function() {
    document.getElementById('notesModal').close();
});