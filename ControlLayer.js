document.addEventListener("DOMContentLoaded", function () {
    var mymap = L.map("map").setView([39.09567618381688, -0.219680134361635], 16);

    // Agrega una capa base, por ejemplo, una capa de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);
    

    //CAPAS PRINCIPALES
    
    // CAPAS SECUNDARIAS.
    var sub_capa1 = L.layerGroup(); 
    var sub_capa2 = L.layerGroup();
    var sub_capa3 = L.layerGroup();
    var sub_capa4 = L.layerGroup();
    var sub_capa5 = L.layerGroup();
    var sub_capa6 = L.layerGroup();

    //Agregar Geojson
    var sub_capa1 = L.geoJSON(playa2017,{
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>Superficie de playa en </b>' + feature.properties.Year)
        },
        style:{
            fillColor: '#896d5d',
            fillOpacity:0.7,
            color: 'none'
        }
    });

    var sub_capa2 = L.geoJSON(playa2022,{
        onEachFeature: function(feature,layer){
            layer.bindPopup('<b>Superficie de playa en </b>' + feature.properties.Year)
        },
        style:{
            fillColor: '#896d5d',
            fillOpacity:0.7,
            color: 'none'
        }
    });

    var sub_capa3 = L.geoJSON(perdida_ganancia,{
        onEachFeature: function(feature,layer){
            layer.bindPopup(feature.properties.Cambios + '<b> de arena </b>')
        },
        style: function(feature) {
            var columna = feature.properties.Cambios;
    
            //Asignar colores según categoría
            var fillColor = columna === 'Pérdida' ? 'red' : 'green';
            var fillOpacity = 0.4;
            var color = 'none';
    
            return {
                fillColor: fillColor,
                fillOpacity: fillOpacity,
                color: color
            };
        }
    });

    var sub_capa4 = L.geoJSON(prediction30years,{
        onEachFeature: function(feature,layer){
            layer.bindPopup('<a>Zona Inundable </a>')
        },
        style:{ 
            fillColor: 'red',
            fillOpacity: 0.2,
            color: 'red',   
            weight: 0.2,
        }
    });

    var sub_capa5 = L.geoJSON(edif, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup('<b> Valor económico </b>' + feature.properties.Valor);
        },
        style: function(feature) {
            var columna1 = feature.properties.Valor;
    
            // Asignar colores según categoría
            var fillColor;
            if (columna1 === 'Alto') {
                fillColor = 'red';
            } else if (columna1 === 'Medio') {
                fillColor = 'yellow';
            } else if (columna1 === 'Bajo') {
                fillColor = 'green';
            } else {
                fillColor = 'gray'; // Color por defecto para otros valores
            }
            
            var fillOpacity = 0.4;
            var color = 'none';
    
            return {
                fillColor: fillColor,
                fillOpacity: fillOpacity,
                color: color
            };
        }
    });


    var sub_capa6 = L.geoJSON(intrusion,{
        onEachFeature: function(feature, layer){
            // Crea el contenido del tooltip utilizando la propiedad 'denmasa'
            var tooltipContent = '<b> Área: </b>' + feature.properties.denmasa;
    
            // Asigna el tooltip al feature
            layer.bindTooltip(tooltipContent, {
                sticky: true, // El tooltip se mantiene abierto cuando se pasa el cursor
                direction: 'auto' // La dirección del tooltip se ajusta automáticamente
            });
    
            // Asigna el popup al feature (como ya lo tenías)
            layer.bindPopup('<b>Estado global frente a la subida del nivel del mar:</b> ' + feature.properties.estado_glo);
        },
        style:{ 
            fillColor: 'blue',
            fillOpacity: 0.2,
            color: 'none',   
        }
    });

     // Obtén el checkbox de la Capa 1
    var checkboxCapa1 = document.querySelector(".dropdown_list input[type='checkbox']");

    // Obtén el elemento .dropdown_content
    var dropdownContent = document.querySelector(".dropdown_list");

    // Escucha los cambios en el estado del checkbox
    checkboxCapa1.addEventListener("change", function () {
        // Verifica si el checkbox está marcado
        if (checkboxCapa1.checked) {
            // Si está marcado, muestra el desplegable de las subcapas
            dropdownContent.style.setProperty("--rows", "1fr");
        } else {
            // Si no está marcado, oculta el desplegable de las subcapas
            dropdownContent.style.setProperty("--rows", "0fr");
        }
    });


        var sub_capa1Visible = false; // Variable para rastrear si la capa 1 está visible
        var sub_capa2Visible = false;
        var sub_capa3Visible = false;
        var sub_capa4Visible = false;
        var sub_capa5Visible = false;
        var sub_capa6Visible = false;

    document.querySelector(".sub_capa1").addEventListener("click", function () {
        // Cambia la visibilidad de la capa 1 cuando se hace clic en el menú
        if (sub_capa1Visible) {
            mymap.removeLayer(sub_capa1);
        } else {
            mymap.addLayer(sub_capa1);
        }
        sub_capa1Visible = !sub_capa1Visible;
    });

    document.querySelector(".sub_capa2").addEventListener("click", function () {
        // Cambia la visibilidad de la capa 2 cuando se hace clic en el menú
        if (sub_capa2Visible) {
            mymap.removeLayer(sub_capa2);
        } else {
            mymap.addLayer(sub_capa2);
        }
        sub_capa2Visible = !sub_capa2Visible;
    });

    document.querySelector(".sub_capa3").addEventListener("click", function () {
        // Cambia la visibilidad de la capa 2 cuando se hace clic en el menú
        if (sub_capa3Visible) {
            mymap.removeLayer(sub_capa3);
        } else {
            mymap.addLayer(sub_capa3);
        }
        sub_capa3Visible = !sub_capa3Visible;
    });

    document.querySelector(".sub_capa4").addEventListener("click", function () {
        // Cambia la visibilidad de la capa 2 cuando se hace clic en el menú
        if (sub_capa4Visible) {
            mymap.removeLayer(sub_capa4);
        } else {
            mymap.addLayer(sub_capa4);
        }
        sub_capa4Visible = !sub_capa4Visible;
    });

    document.querySelector(".sub_capa5").addEventListener("click", function () {
        // Cambia la visibilidad de la capa 2 cuando se hace clic en el menú
        if (sub_capa5Visible) {
            mymap.removeLayer(sub_capa5);
        } else {
            mymap.addLayer(sub_capa5);
        }
        sub_capa5Visible = !sub_capa5Visible;
    });

    document.querySelector(".sub_capa6").addEventListener("click", function () {
        // Cambia la visibilidad de la capa 2 cuando se hace clic en el menú
        if (sub_capa6Visible) {
            mymap.removeLayer(sub_capa6);
        } else {
            mymap.addLayer(sub_capa6);
        }
        sub_capa6Visible = !sub_capa6Visible;
    });
    


});

