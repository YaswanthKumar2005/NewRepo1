function showweatherDetails(event){
    event.preventDefault();
    const city=document.getElementById('city').value;
    const lat=document.getElementById('lat').value;
    const lon=document.getElementById('lon').value;
    const apiKey='325b4c6a22b8d9ede359bd21ac1a1fd9';
    let apiurl1;
    if (city){
        apiurl1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    }
    else if (lat && lon) {
        apiurl1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    }
    else {
        alert("Enter City name or Lattitude and Longitude");
        return;
    }

    fetch(apiurl1)
    .then(response=>response.json())
    .then(data=>{
        const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });

}
 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );