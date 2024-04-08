import { currentTime } from './time-module.js';
import { initializeNotesApp } from './notes-app.js';
import { initializeCalculator } from './calculator-app.js';

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


// Display Clock

const updateClock = () => {
    const formattedTime = currentTime();
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.innerText = formattedTime;
};

setInterval(updateClock, 1000);

updateClock();










// Weather App

document.getElementById('weatherCard').addEventListener('dblclick', function() {
    document.getElementById('weatherModal').showModal();
    const contentWrapper = document.querySelector('#weatherModal .content-wrapper');
    contentWrapper.innerHTML = ''; 

    const weatherAppHtml = `
        <h2>Javascript Weather App</h2>
        <p>Real-time weather data by location</p>
        <input type="text" id="cityInput" placeholder="Enter a city">
        <button id="getWeatherButtonModal">Get Weather</button>
        <div id="weatherResultModal"></div>
    `;
    contentWrapper.insertAdjacentHTML('beforeend', weatherAppHtml);

    window.displayWeatherCard = (weatherData) => {
        const container = document.getElementById('weatherResultModal');
        container.innerHTML = '';

        const cardHtml = `
            <div class="weather-card">
                <h2>Weather in ${weatherData.name}</h2>
                <p>Temperature: ${kelvinToCelsius(weatherData.main.temp)} °C</p>
                <p>Weather: ${weatherData.weather[0].main} - ${weatherData.weather[0].description}</p>
                <p>Humidity: ${weatherData.main.humidity}%</p>
                <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
            </div>
        `;

        container.innerHTML = cardHtml;
    };

    document.getElementById('getWeatherButtonModal').addEventListener('click', async function() {
        const city = document.getElementById('cityInput').value;
        const apiKey = '448f568c5483d5b0f66f39e0a3ac8fbc'; 
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

        try {
            const geoResponse = await fetch(geoUrl);
            const geoData = await geoResponse.json();

            if (geoData.length > 0) {
                const { lat, lon } = geoData[0];
                const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

                const weatherResponse = await fetch(weatherUrl);
                const weatherData = await weatherResponse.json();

                window.displayWeatherCard(weatherData);
            } else {
                alert('City not found!');
                console.error('City not found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    document.getElementById('closeWeatherModal').addEventListener('click', function() {
        document.getElementById('weatherModal').close();
    });
});

const kelvinToCelsius = (kelvin) => {
    return Math.round((kelvin - 273.15));
};








// Calculator App

// const initializeCalculator = () => {
//     const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
//     const numberOfRows = Math.ceil(buttonArr.length / 4);
//     const calculatorBody = document.querySelector('#calculatorBody');
//     const calculatorInput = document.querySelector('#calculatorInput');

//     let num1 = 0;
//     let num2 = 0;
//     let operator = 0;

//     calculatorBody.innerHTML = '';

//     let createRowAndButtons = () => {
//         let index = 0;
//         for (let i = 0; i < numberOfRows; i++) {
//             const newCalculatorRow = document.createElement('div');
//             calculatorBody.appendChild(newCalculatorRow);
//             const buttonsInRow = Math.min(buttonArr.length - index, 4);

//             for (let j = 0; j < buttonsInRow; j++) {
//                 const newButton = document.createElement('button');
//                 newButton.innerText = buttonArr[index];
//                 newCalculatorRow.appendChild(newButton);
//                 newButton.addEventListener('click', () => {
//                     if(newButton.innerText === 'AC') {
//                         calculatorInput.value = '';
//                         num1 = 0;
//                         num2 = 0;
//                         operator = 0;
//                     } else if (['+', '-', 'x', '÷'].includes(newButton.innerText)) {
//                         num1 = parseFloat(calculatorInput.value);
//                         operator = newButton.innerText;
//                         calculatorInput.value = num1;
//                     } else if (newButton.innerText === '=') {
//                         num2 = parseFloat(calculatorInput.value);
//                         calculatorInput.value = calculate(num1, num2, operator);
//                     } else {
//                         calculatorInput.value = ''
//                         calculatorInput.value += newButton.innerText;
//                     }
//                 });
//                 index += 1;
//             }
//         }
//     };

//     createRowAndButtons();
// }

// document.getElementById('calculatorCard').addEventListener('dblclick', function() {
//     document.getElementById('calculatorModal').showModal();
//     initializeCalculator(); 
// });

// document.getElementById('closeCalculatorModal').addEventListener('click', function() {
//     document.getElementById('calculatorModal').close();
// });


// const calculate = (num1, num2, operator) => {
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "x") { // Changed "*" to "x" for consistency with buttonArr
//         return num1 * num2;
//     } else if (operator === "÷") { // Changed "/" to "÷" for consistency with buttonArr
//         if (num2 === 0) {
//             return "Invalid numbers";
//         }
//         return num1 / num2;
//     } else {
//         return "Invalid operator";
//     }
// };


initializeCalculator()

initializeNotesApp()




