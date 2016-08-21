if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
} else {
    loadWeather("Auckland, NZ", "");
}
$(document).ready(function() {
    setInterval(loadWeather('Auckland', '2348079'), 10000);
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        locaton: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather) {
            temp = '<h5>temp Celcius  humidity  windspeed</h5>' + weather.temp + '&deg;';
            city = weather.city ;
            wcode = '<img class = "weathericon" src="views/weathericons/' + weather.code + '.svg">';
            wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
            humidity = weather.humidity + '%';

            //target classes
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
        },

        error: function(error) {
            $(".error").html('<p>' + error + '</p>');
        }
    });
}
