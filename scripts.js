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

const initializeCalculator = () => {
    const buttonArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const numberOfRows = Math.ceil(buttonArr.length / 4);
    const calculatorBody = document.querySelector('#calculatorBody');
    const calculatorInput = document.querySelector('#calculatorInput');

    calculatorBody.innerHTML = '';

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



















document.getElementById('notesCard').addEventListener('dblclick', function() {
    const notesModal = document.getElementById('notesModal');
    const contentWrapper = notesModal.querySelector('.content-wrapper');

    contentWrapper.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = 'Task Tracker App';

    const inputContainer = document.createElement('div');
    inputContainer.setAttribute('id', 'inputContainer');
    
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('id', 'taskInput');
    taskInput.setAttribute('placeholder', 'Add a new task');
    
    const addTaskBtn = document.createElement('button');
    addTaskBtn.setAttribute('id', 'addTaskBtn');
    addTaskBtn.textContent = 'Add Task';

    inputContainer.appendChild(taskInput);
    inputContainer.appendChild(addTaskBtn);

    const tasksList = document.createElement('ul');
    tasksList.setAttribute('id', 'tasksList');

    contentWrapper.appendChild(heading);
    contentWrapper.appendChild(inputContainer);
    contentWrapper.appendChild(tasksList);

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        if (taskInput.value.trim() === '') return; 

        const li = document.createElement('li');
        const taskContent = document.createElement('span');
        taskContent.textContent = taskInput.value;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'removeTask';
        removeButton.onclick = function() {
            tasksList.removeChild(li);
        };

        li.appendChild(taskContent);
        li.appendChild(removeButton);

        li.addEventListener('click', function(event) {
            if (event.target !== removeButton) {
                this.classList.toggle('completed');
            }
        });

        tasksList.appendChild(li);
        taskInput.value = '';
    }

    notesModal.showModal();
});

document.getElementById('notesCard').addEventListener('dblclick', function() {
    document.getElementById('notesModal').showModal();
});

document.getElementById('closeNotesModal').addEventListener('click', function() {
    document.getElementById('notesModal').close();
});





