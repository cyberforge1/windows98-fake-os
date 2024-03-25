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

// CLOSE APPLICATION WINDOWS WITH X BUTTON

const closeApplicationWindow = (event) => {
    let outerAppWindow = event.target.closest('.outer-app-window');
    outerAppWindow.style.display = 'none';
}

closeButtonOne.addEventListener('click', closeApplicationWindow);
closeButtonTwo.addEventListener('click', closeApplicationWindow);
closeButtonThree.addEventListener('click', closeApplicationWindow);

// OPENS A DESKTOP APPLICATION WINDOW ON ICON DOUBLE CLICK

const openAppOneWindow = () => {
    let appOneWindow = document.querySelector('#appOneOuter');
    if (appOneWindow.style.display === 'none') {
        appOneWindow.style.display = 'block';
    } else {
        appOneWindow.style.display = 'none';
    }
}

const openAppTwoWindow = () => {
    let appTwoWindow = document.querySelector('#appTwoOuter');
    if (appTwoWindow.style.display === 'none') {
        appTwoWindow.style.display = 'block';
    } else {
        appTwoWindow.style.display = 'none';
    }
}

const openAppThreeWindow = () => {
    let appThreeWindow = document.querySelector('#appThreeOuter');
    if (appThreeWindow.style.display === 'none') {
        appThreeWindow.style.display = 'block';
    } else {
        appThreeWindow.style.display = 'none';
    }
}

appOneImage.addEventListener('dblclick', openAppOneWindow);
appTwoImage.addEventListener('dblclick', openAppTwoWindow);
appThreeImage.addEventListener('dblclick', openAppThreeWindow);


// CALCULATOR DISPLAY


const addToDisplay = (value) => {
    document.getElementById('display').textContent += value;
};

const clearDisplay = () => {
    document.getElementById('display').textContent = '';
};

const calculate = () => {
    let expression = document.getElementById('display').textContent;
    let result = eval(expression);
    document.getElementById('display').textContent = result;
};


const buttons = document.querySelectorAll('.keys button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; 
        if (value === '=') {
            calculate(); 
        } else if (value === 'AC') {
            clearDisplay(); 
        } else {
            addToDisplay(value);
        }
    });
});



// DISPLAY THE CLOCK

const updateClock = () => {
    const formattedTime = currentTime();
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.innerText = formattedTime;
};

setInterval(updateClock, 1000);

updateClock();
