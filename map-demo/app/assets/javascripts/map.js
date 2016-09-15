var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXNobGVpZ2hobyIsImEiOiJjaXN6d3l6MjUwMDYxMnlvM2djajZudG1zIn0.hAdrsz6R7-4Z9OepbVmMOA',
                          { id: 'ashleighho.1ccd1a7b',
                            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'});
var light   = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXNobGVpZ2hobyIsImEiOiJjaXN6d3l6MjUwMDYxMnlvM2djajZudG1zIn0.hAdrsz6R7-4Z9OepbVmMOA',
                            { id: 'ashleighho.1d82ma2b',
                              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'});

var map = L.map('mapid', {
  center: [54.085173,-4.899902],
  zoom: 5,
  layers: [streets, light]
});

var baseMaps = {
  "Light": light,
  "Streets": streets
};

var house1 = L.marker([51.51825645, 0.39675052]),
    house2 = L.marker([51.29733524, 0.33795798]),
    house3 = L.marker([51.26493153, -0.16777623]),
    house4 = L.marker([51.3764159, -0.38703955]);

var rel1 = L.marker([51.51171592, -0.19840436]),
    rel2 = L.marker([51.42053788,  -0.29552472]),
    rel3 = L.marker([51.18339414, -0.18373164]),
    rel4 = L.marker([51.3988883, 0.02256264]);

var pop1 = L.marker([51.41948517, 0.38972792]),
    pop2 = L.marker([51.64013792, -0.07561924]),
    pop3 = L.marker([51.18825571, -0.07817396]),
    pop4 = L.marker([51.66425537, 0.03657421]);

var eco1 = L.marker([51.34887288, -0.02102078]),
    eco2 = L.marker([51.52540755, 0.17068661]),
    eco3 = L.marker([51.39440133, 0.34708386]),
    eco4 = L.marker([51.30482618, -0.14147699]);

var housing = L.layerGroup([house1, house2, house3, house4]);
var religion = L.layerGroup([rel1, rel2, rel3, rel4]);
var population = L.layerGroup([pop1, pop2, pop3, pop4]);
var economy = L.layerGroup([eco1, eco2, eco3, eco4]);

var layerToggles = {
  "Housing": housing,
  "Religion": religion,
  "Population": population,
  "Economy": economy
};

var controls = L.control.layers(baseMaps, layerToggles, {collapsed:false}).addTo(map);
