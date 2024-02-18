//Open Weather Map Key
const apiKey = '47e9036d00b40d9e05e4e0237182ccf7';
const weatherContainer = document.getElementById('weather-container');

async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();

        if (response.status !== 200) {
            throw new Error(data.message || 'Error fetching weather data');
        }

        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        weatherContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const temperature = (data.main.temp - 273.15).toFixed(2);
    const humidity = data.main.humidity;
    const weatherDescription = data.weather[0].description;

    const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Weather: ${weatherDescription}</p>
    `;

    weatherContainer.innerHTML = weatherHTML;
}