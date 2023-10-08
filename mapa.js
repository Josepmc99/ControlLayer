var map = L.map('map').setView([51.505, -0.09], 13);

var base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var subLayer1 = L.layerGroup([
    L.marker([51.505, -0.08]).bindPopup('Marcador 1 de Capa-sub1'),
    L.marker([51.507, -0.085]).bindPopup('Marcador 2 de Capa-sub1'),
]);

var subLayer2 = L.layerGroup([
    L.marker([51.508, -0.09]).bindPopup('Marcador 1 de Capa-sub2'),
    L.marker([51.509, -0.095]).bindPopup('Marcador 2 de Capa-sub2'),
]);

var layer1 = L.layerGroup([
    L.marker([51.705, -0.18]).bindPopup('Marcador 1 de Capa-sub1'),
    L.marker([51.807, -0.285]).bindPopup('Marcador 2 de Capa-sub1'),
]);

var layer2 = L.layerGroup([
    L.marker([52.705, -0.35]).bindPopup('Marcador 1 de Capa-sub1'),
    L.marker([51.207, -0.12]).bindPopup('Marcador 2 de Capa-sub1'),
]);

var baseLayers = {
    "Mapa base": base,
};

var overlays = {
    "Capa 1": layer1,
    "Capa 2": layer2,
};

L.control.layers(baseLayers, overlays).addTo(map);

// Agrega un desplegable para Capa 1
var subLayerControl1 = L.control.layers(null, {
    "Capa-sub1": subLayer1,
    "Capa-sub2": subLayer2
}, { collapsed: false });

subLayerControl1.addTo(map);
subLayerControl1._container.querySelector(".leaflet-control-layers-selector").innerHTML = 'Capa 1';

// Agrega un desplegable para Capa 2
var subLayerControl2 = L.control.layers(null, {
    "Capa-sub1": subLayer1,
    "Capa-sub2": subLayer2
}, { collapsed: false });

subLayerControl2.addTo(map);
subLayerControl2._container.querySelector(".leaflet-control-layers-selector").innerHTML = 'Capa 2';

base.addTo(map); // Mostrar Mapa base por defecto


