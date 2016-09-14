/*
    Created by Adam Fallon
    Email: a.fallon@kainos.com

    Geocode-utils : Takes input of Postcode and outputs location data from Mapbox

    Need to include these files before adding geocode-utils.js
        <script src ='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
        <script src='https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.js'></script>

  This is optional styling if you are directly using MapBox as the rendering engine
        <link href='https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.css' rel='stylesheet' /> 
*/
L.mapbox.accessToken = 'ADD_ACCESS_TOKEN_HERE'
var geocoder = L.mapbox.geocoder('mapbox.places')

function geocode (searchQuery) {
  geocoder.query(searchQuery, function (err, data) {
    if (!err) {
        var utils = new MapUtils()
        utils.moveViewPort(data.latlng, 30)
        return data.latlng
     } else {
        console.log(err)
        return err
     }
  })
}
