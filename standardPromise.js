var myApi = fetch("http://api.weather.gov");

// var myApi is fetching the APi
// .then method is performing after fetch action

myApi.then((value) => {
    console.log("The response value is: \t\t", value)
});
