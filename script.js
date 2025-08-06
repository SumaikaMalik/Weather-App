async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY"; // Replace this with your actual API key
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      resultDiv.innerHTML = "<p>City not found!</p>";
    } else {
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>☁️ Condition: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    }
  } catch (error) {
    resultDiv.innerHTML = "<p>Error fetching weather data. Try again later.</p>";
  }
}
