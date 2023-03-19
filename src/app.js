import {getInitialInfo, getIpAddressInfo} from './addressApi.js';

// Get element IDs
const timeZone = document.getElementById('timeZone');
const isp = document.getElementById('isp');
const ipAddress = document.getElementById('ipAddress');
const region = document.getElementById('region');
const network = document.getElementById('network');

const userIpAddress = async () => {
  const getInfo = await getInitialInfo();
  const loadIp = await getIpAddressInfo(getInfo);
  ipAddress.innerText = loadIp.ip;
  region.innerText = loadIp.location.region;
  network.innerText = loadIp.as.domain;
  isp.innerText = loadIp.isp;
  timeZone.innerText = loadIp.location.timezone;
}

window.addEventListener('load', userIpAddress);

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  createMap(position.coords.latitude, position.coords.longitude);
}

window.addEventListener('load', () => {
  getLocation();
})

function createMap(lat, long) {
  const mapHeight = document.getElementById('map');
  mapHeight.style.height = '100vh';
  const map = L.map('map', {
    center: [lat, long],
    zoom: 13
  });
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  let mapIcon = L.icon({
    iconUrl: '/images/icon-location.svg',
    iconSize: [46, 56],
    iconAnchor: [22, 94],
  });
  
  L.marker([lat, long], {icon: mapIcon, draggable:true}).addTo(map);
}



