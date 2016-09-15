var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXNobGVpZ2hobyIsImEiOiJjaXN6d3l6MjUwMDYxMnlvM2djajZudG1zIn0.hAdrsz6R7-4Z9OepbVmMOA',
                          {id: 'ashleighho.1ccd1a7b',
                           attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',

                            }),
    light     = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXNobGVpZ2hobyIsImEiOiJjaXN6d3l6MjUwMDYxMnlvM2djajZudG1zIn0.hAdrsz6R7-4Z9OepbVmMOA',
                            {id: 'ashleighho.1d82ma2b',
                              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',

                            });

var map = L.map('mapid', {
  center: [54.085173,-4.899902],
  zoom: 5,
  layers: [streets, light]
});

var baseMaps = {
  "Light": light,
  "Streets": streets
};

var controls = L.control.layers(baseMaps, null, {collapsed:false}).addTo(map);

var htmlObject = controls.getContainer();

var layerControlDiv = document.getElementById('layer-controls');

function setParent(el, newParent)
{
  newParent.appendChild(el);
}
setParent(htmlObject, layerControlDiv);








//
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//   maxZoom: 18,
//   id: 'ashleighho.1ccd1a7b',
//   accessToken: 'pk.eyJ1IjoiYXNobGVpZ2hobyIsImEiOiJjaXN6d3l6MjUwMDYxMnlvM2djajZudG1zIn0.hAdrsz6R7-4Z9OepbVmMOA'
// }).addTo(mymap);




/*var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], 500, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(mymap);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
  .setLatLng([51.5, -0.09])
  .setContent("I am a standalone popup.")
  .openOn(mymap);

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);*/
