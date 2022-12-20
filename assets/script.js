//variables
//func that populates a list of cities that have been searched/searchable history
//fun that handles the submit of the search form
//fun that handles clicking on a previoulsy searched city
//fun that calls that api and populates the weather data
var api = "e3f5192af11f96c2ca0a8644dabb537a";
var searchForm = $("#search-form");
var searchEl = $("#search");
var todayEl = $("#today");
var buttonEl = $("#search-button");
var cityListEl = $("#cityList");
var searchedHistory = localStorage.getItem("city")
  ? JSON.parse(localStorage.getItem("city"))
  : []; //ternary operator
var cityInputEl = [];
var cityName =localStorage.getItem("city")

//different apis for coords, (aka rest api) different end points for rest apis, data's seg. depending the specific request
// var iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

//this data will be rolled over to the next api hit which will be the 4cast data. some for current weather some for the next forcast data url
// var apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${newKey}`;
//functions
//event listeners

function renderSearchHis() {
  cityListEl.html(""); //clears out anything in the ul
  $(searchedHistory).each(function (i, e) {
    cityListEl.prepend("<li>" + e + "</li>");
  });
  $("li").attr("class", "list-item");
  $("li").on("click", function () {
    var liEl = $(this).text();
    cityInputEl = liEl;
    getWeather();
  });
}
renderSearchHis()

function handleSearchSubmit(event) {
  event.preventDefault();
  cityInputEl = $("#search").val().trim();
  if (!searchedHistory.includes(cityInputEl)){
        searchedHistory.push(cityInputEl)

  }

  if (!cityInputEl){
        return
  }
  renderSearchHis()

  $("#cityName").text(cityInputEl)
  searchEl.val("") //clearing search bar

  localStorage.setItem("city", JSON.stringify(searchedHistory));
}


function fetchCurrentWeather(city) {
  var apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${api}&q=${city}&units=imperial`;

  fetch(apiUrlWeather)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}


// searchForm.addEventListener("submit", handleSearchSubmit);

//for the next call lat, long,

//search button for user to select their city

//  city name executes a (current condition) to get request weather

//Parsing responses to receive current conditions

//Using saved city name, display a 5 day forecast
//Local storage?

//Parse response to display forecast for next 5 days underneath current conditions?

//initPage?
