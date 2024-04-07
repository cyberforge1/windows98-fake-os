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

















// Weather App

document.getElementById('weatherCard').addEventListener('dblclick', function() {
    document.getElementById('weatherModal').showModal();
    // Clear previous weather app UI if exists
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

    // Function to display weather information in a card format
    window.displayWeatherCard = (weatherData) => {
        const container = document.getElementById('weatherResultModal');
        container.innerHTML = '';

        const cardHtml = `
            <div class="weather-card">
                <h2>Weather in ${weatherData.name}</h2>
                <p>Temperature: ${kelvinToCelsius(weatherData.main.temp)}°C</p>
                <p>Weather: ${weatherData.weather[0].main} - ${weatherData.weather[0].description}</p>
                <p>Humidity: ${weatherData.main.humidity}%</p>
                <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
            </div>
        `;

        container.innerHTML = cardHtml;
    };

    // Event listener for the Get Weather button inside modal
    document.getElementById('getWeatherButtonModal').addEventListener('click', async function() {
        const city = document.getElementById('cityInput').value;
        const apiKey = '448f568c5483d5b0f66f39e0a3ac8fbc'; // Replace with your actual API key
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

        try {
            // First, get the latitude and longitude
            const geoResponse = await fetch(geoUrl);
            const geoData = await geoResponse.json();

            if (geoData.length > 0) {
                const { lat, lon } = geoData[0];
                const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

                // Now, get the weather using the lat and lon
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

    // Event listener for closing the modal
    document.getElementById('closeWeatherModal').addEventListener('click', function() {
        document.getElementById('weatherModal').close();
    });
});

// Helper function to convert temperature from Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
};



















// Calculator App

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

document.getElementById('calculatorCard').addEventListener('dblclick', function() {
    document.getElementById('calculatorModal').showModal();
    initializeCalculator(); 
});

document.getElementById('closeCalculatorModal').addEventListener('click', function() {
    document.getElementById('calculatorModal').close();
});







































// Notes Modal

document.getElementById('notesCard').addEventListener('dblclick', function() {
    document.getElementById('notesModal').showModal();
});

document.getElementById('closeNotesModal').addEventListener('click', function() {
    document.getElementById('notesModal').close();
});




