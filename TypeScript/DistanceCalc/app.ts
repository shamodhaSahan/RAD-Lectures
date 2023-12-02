let location1_lat_input_element = document.getElementById('lat1') as HTMLInputElement;
let location1_lon_input_element = document.getElementById('lon1') as HTMLInputElement;
let location2_lat_input_element = document.getElementById('lat2') as HTMLInputElement;
let location2_lon_input_element = document.getElementById('lon2') as HTMLInputElement;
let result_element = document.getElementById('result');

document.getElementById('btn').addEventListener('click', () => {

    let lat1 = +location1_lat_input_element.value;
    let lon1 = +location1_lon_input_element.value;
    let lat2 = +location2_lat_input_element.value;
    let lon2 = +location2_lon_input_element.value;

    let distance = calcDistance({lon: lon1, lat: lat1}, {lon: lon2, lat: lat2});

    result_element.innerText = `${distance.toFixed(2)} KM`;
});


function calcDistance(
    location1: { lon: number; lat: number },
    location2: { lon: number; lat: number }
): number {
    let lon1 = location1.lon;
    let lat1 = location1.lat;

    let lon2 = location2.lon;
    let lat2 = location2.lat;

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const R = 6371;
    let distance = R * c;

    return distance;
}
