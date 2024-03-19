document.getElementById('submit').addEventListener('click', function() {
    var city = document.getElementById('city').value;
    var apiKey = '0b96b120ea6cb5fb938066b7dc6ce382'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var weatherDescription = data.weather[0].description;
            var temperature = data.main.temp;
            var weatherResult = `Weather: ${weatherDescription}, Temperature: ${temperature}°C`;
            document.getElementById('weather-result').textContent = weatherResult;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            document.getElementById('weather-result').textContent = 'Error fetching weather data. Please try again.';
        });
});
