var location1_lat_input_element = document.getElementById('lat1');
var location1_lon_input_element = document.getElementById('lon1');
var location2_lat_input_element = document.getElementById('lat2');
var location2_lon_input_element = document.getElementById('lon2');
var result_element = document.getElementById('result');
document.getElementById('btn').addEventListener('click', function () {
    var lat1 = +location1_lat_input_element.value;
    var lon1 = +location1_lon_input_element.value;
    var lat2 = +location2_lat_input_element.value;
    var lon2 = +location2_lon_input_element.value;
    //
    var location_1 = { lon: lon1, lat: lat1 };
    var location_2 = { lon: lon2, lat: lat2 };
    var distance = calcDistance(location_1, location_2);
    result_element.innerText = "".concat(distance.toFixed(2), " KM");
});
function calcDistance(location1, location2) {
    var lon1 = location1.lon;
    var lat1 = location1.lat;
    var lon2 = location2.lon;
    var lat2 = location2.lat;
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var R = 6371;
    var distance = R * c;
    return distance;
}
