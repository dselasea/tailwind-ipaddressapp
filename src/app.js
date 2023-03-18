const mapHeight = document.getElementById('map');
mapHeight.style.height = '100vh';
const map = L.map('map', {
  center: [37.40599, -122.078514],
  zoom: 13
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
