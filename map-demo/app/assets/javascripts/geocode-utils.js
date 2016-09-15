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

var config = new Config()
L.mapbox.accessToken = config.mapboxKey()

var geocoder = L.mapbox.geocoder('mapbox.places')
const ZOOM_LEVEL = 17

function geocode (searchQuery) {

  geocoder.query(searchQuery, function (err, data) {
    if (!err) {
      if (data.hasOwnProperty('latlng')) {
        $('#error').slideUp("slow")
        var utils = new MapUtils()
        utils.moveViewPort(data.latlng[0], data.latlng[1], ZOOM_LEVEL)
        return data.latlng
      } else {
        postCodeBackup(searchQuery)
      }
    } else {
      postCodeBackup(searchQuery)
    }
  })
}
function postCodeBackup (searchQuery) {
  $.ajax({
    url: 'https://api.postcodes.io/postcodes/' + searchQuery,
    success: function (data) {
      $('#error').slideUp("slow")
      var utils = new MapUtils()
      utils.moveViewPort(data.result.latitude, data.result.longitude, ZOOM_LEVEL)
    },
    error: function (err) {
      console.log('Postcode Not Found')
      $('#postcode-error').text("We could not find " + searchQuery)
      $('#error').slideDown("slow")
    }
  })
}

