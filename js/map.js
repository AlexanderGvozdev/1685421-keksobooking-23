import {getActiveForms} from './form-disabled.js';
import {createOffers, createAnnouncement} from './create-announcement.js';
import {createCardAnnouncement} from './create-element.js';

const NUMBER_OF_DECIMALS = 5;
const ANNOUNCEMENT_QUANTITY = 10;

const MapSettings = {
  LAT: 35.68951,
  LNG: 139.69201,
  ZOOM: 12,
  OSM_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  OSM_ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ICON_URL: {
    MAIN: 'img/main-pin.svg',
    REGULAR: 'img/pin.svg',
  },
  ICON_SIZE_MAIN: {
    WIDTH: 52,
    HEIGHT: 52,
  },
  ICON_SIZE_REGULAR: {
    WIDTH: 40,
    HEIGHT: 40,
  },
};

const resetButton = document.querySelector('.ad-form__reset');
const address = document.querySelector('#address');

const initMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      getActiveForms();
    })
    .setView(
      {
        lat: MapSettings.LAT,
        lng: MapSettings.LNG,
      },
      MapSettings.ZOOM,
    );

  const mapLayer = L.tileLayer(MapSettings.OSM_URL, { attribution: MapSettings.OSM_ATTRIBUTION });

  // Функция генерации Иконок
  const getPinIcon = (url, width, heigth) => {
    const icons = L.icon({
      iconUrl: url,
      iconSize: [width, heigth],
      iconAnchor: [width / 2, heigth],
    });
    return icons;
  };

  // Функция генерации Маркеров
  const getPinMarker = (lat, lng, boolean, icons) => {
    const pinMarker = L.marker(
      {
        lat: lat,
        lng: lng,
      },
      {
        draggable: boolean,
        icon: icons,
      },
    );

    return pinMarker;
  };

  const mainMarker = getPinMarker(
    MapSettings.LAT,
    MapSettings.LNG,
    true,
    getPinIcon(MapSettings.ICON_URL.MAIN, MapSettings.ICON_SIZE_MAIN.WIDTH, MapSettings.ICON_SIZE_MAIN.HEIGHT),
  );

  // Слушатель на Красный Маркер
  mainMarker.on('move', (evt) => {
    address.readOnly = true;
    address.value = `${mainMarker._latlng.lat}, ${mainMarker._latlng.lng}`;
    const { lat, lng } = evt.target.getLatLng();
    address.value = `${lat.toFixed(NUMBER_OF_DECIMALS)}, ${lng.toFixed(NUMBER_OF_DECIMALS)}`;
  });

  // Выводит объекты на карте
  const points = createOffers(ANNOUNCEMENT_QUANTITY);
  points.forEach((item) => {
    const { lat, lng } = item.location;
    const createCustomPopup = createCardAnnouncement(createAnnouncement());

    const regularMarker = getPinMarker(
      lat,
      lng,
      true,
      getPinIcon(MapSettings.ICON_URL.REGULAR, MapSettings.ICON_SIZE_REGULAR.WIDTH, MapSettings.ICON_SIZE_REGULAR.HEIGHT),
    );

    const marker = regularMarker;
    marker.addTo(map).bindPopup(createCustomPopup, {
      keepInView: true,
    });
  });

  // Кнопка "Очистить"
  resetButton.addEventListener('click', () => {
    mainMarker.setLatLng({
      lat: MapSettings.LAT,
      lng: MapSettings.LNG,
    });

    map.setView(
      {
        lat: MapSettings.LAT,
        lng: MapSettings.LNG,
      },
      MapSettings.ZOOM,
    );
  });

  mapLayer.addTo(map);
  mainMarker.addTo(map);
};

export {initMap};

// по остальному, пока что сделал как знаю
