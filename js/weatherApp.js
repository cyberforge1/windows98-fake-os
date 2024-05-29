import CONFIG from '../config.js';

export const initializeWeatherApp = () => {
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

        document.getElementById('getWeatherButtonModal').addEventListener('click', async function() {
            const city = document.getElementById('cityInput').value;
            const apiKey = CONFIG.WEATHER_API_KEY;

            try {
                const geoData = await getLatLong(city, apiKey);
                const weatherData = await getWeatherData(geoData, apiKey);
                displayWeatherCard(weatherData);
            } catch (error) {
                alert(error.message);
                console.error('Error fetching data:', error);
            }
        });

        document.getElementById('closeWeatherModal').addEventListener('click', function() {
            document.getElementById('weatherModal').close();
        });
    });

};

const kelvinToCelsius = (kelvin) => {
    return Math.round((kelvin - 273.15));
};

const getLatLong = async (city, apiKey) => {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();
    if (geoData.length === 0) {
        throw new Error("City not found");
    }
    return geoData;
};

const getWeatherData = async (geoData, apiKey) => {
    const { lat, lon } = geoData[0];
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();
    return weatherData;
};

const displayWeatherCard = (weatherData) => {
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
