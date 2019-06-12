/*Air temp START*/
/*A standard AJAX call that fetches air temperature in celsius.*/
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=c6a2103599b372904ac22fcd5047443a",
    dataType: 'json',
    success: function(results){
        /*Rounds the temperature so decimal points are not displayed*/
        var airtemp = Math.round(results.main.temp);
        $('#air').html(airtemp);
    }
});

/*Air temp END*/