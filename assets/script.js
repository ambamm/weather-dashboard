//variables

var api = "e3f5192af11f96c2ca0a8644dabb537a";
var searchForm = document.querySelector ("#search-form");
var searchEl = document.querySelector ("#search");
var todayEl = document.querySelector ("#today");
var buttonEl = document.querySelector ("#search-button");



//different apis for coords, (aka rest api) different end points for rest apis, data's seg. depending the specific request
// var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;


//this data will be rolled over to the next api hit which will be the 4cast data. some for current weather some for the next forcast data url
// var apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${newKey}`;
//functions
//event listeners 

function handleSearchSubmit(event){
if (!searchEl.value) {
return }
event.preventDefault ()
var city = searchEl.value
fetchCurrentWeather (city)
 }
function fetchCurrentWeather (city) {
var apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${api}&q=${city}&units=imperial`;

fetch(apiUrlWeather)
.then(function (res){
        return res.json();
})
.then (function (data){
        console.log(data);

})
}

searchForm.addEventListener ("submit", handleSearchSubmit)


//for the next call lat, long, 

//search button for user to select their city


//  city name executes a (current condition) to get request weather


//Parsing responses to receive current conditions
    

//Using saved city name, display a 5 day forecast
        //Local storage?

//Parse response to display forecast for next 5 days underneath current conditions?

//initPage?