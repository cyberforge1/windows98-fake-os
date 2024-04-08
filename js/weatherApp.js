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
}
