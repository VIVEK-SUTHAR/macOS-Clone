navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    lon = position.coords.longitude;
    lat = position.coords.latitude;
});
fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=vadodara&units=metric&APPID=8c0293045b979c5bfd0b2a43bd032105"
)
    .then((response) => response.json())
    .then((data) => {
        const place = data.name;
        const temp = data.main.feels_like;
        const temp_minimum = data.main.temp_min;
        const temp_maximum = data.main.temp_max;
        const weather_desc = data.weather[0].main;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
        let place_name = document.querySelector(".place");
        let place_temp = document.querySelector(".temp");
        let weather_state = document.querySelector(".w-state");
        let min_max_t = document.querySelector(".min_max_temp");
        let w_icon = document.querySelector(".weather-icon img");
        place_name.innerHTML = place;
        place_temp.innerHTML = temp;
        weather_state.innerHTML = weather_desc;
        min_max_t.innerHTML = "H: " + temp_minimum + " L:" + temp_maximum;
        w_icon.src = icon;
    }
    )
    .catch((err) => console.log(err));


