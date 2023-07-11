// FfjlQNSycwguu8hTigfcqloxlIRYU
var botNameEl = document.querySelector("#botName");
var botPriceEl = document.querySelector("#botPrice");
var totalCostEl = document.querySelector("#totalCost");

var params = new URLSearchParams(document.location.search);
var botName = params.get('botName');
var botPrice = parseInt(params.get('botPrice'));
var shippingFee = 0.5;

// Boston coordinates
var factoryCoordinates = {
    lat: 42.358990,
    lon: -71.058632
}

function getDistanceFromFactory(position) {
    var userLat = position.coords.latitude;
    var userLon = position.coords.longitude;
    // get distance using the distance matrix api
    fetch('https://api.distancematrix.ai/maps/api/distancematrix/json?origins=' + factoryCoordinates.lat + ',' + factoryCoordinates.lon + '&destinations=' + userLat + ',' + userLon + '&key=FfjlQNSycwguu8hTigfcqloxlIRYU')
        .then(function(response) {
            return response.json()
        })

        .then(function(distanceData) {
            var distance = distanceData.rows[0].elements[0].distance.value;
            var total = calculateShipping(distance);
            displayTotals(total);
        })

        .catch(function(error) {
            console.log(error);
        })
}

function calculateShipping(distance) {
   return (distance * shippingFee) + botPrice
}

function displayTotals(total) {
    // DOM updates to show total on page
    botNameEl.innerText = botName
    botPriceEl.innerText = botPrice
    totalCostEl.innerText = total
    
}

// check if geolocation api is supported
if (navigator.geolocation) {

    function success(position) {
        getDistanceFromFactory(position);
    }

    // get the user's coordinates using the Geolocation API from the browser
    navigator.geolocation.getCurrentPosition(success, function() {
        console.log("Error with geolocation");
    });
} else {
    console.log("Geolocation AP is not supported :(");
}