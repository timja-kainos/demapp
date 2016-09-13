# Demapp

### Prerequisites

* Java 8
* Git
* Docker (If on mac then don't use the homebrew one 2016/09/13)

## Running the application

### Fetch data
Data isn't stored in this repo due to its size
Currently data can be fetched from the [hub](https://hub.kainos.com/f/9c256?)
Place it in `docker-postgis/resources/data` and unzip it

### Build the docker containers:

`cd docker-postgis && ./build.sh`
`cd docker-geoserver && ./build.sh`

### Running the docker containers:
Geoserver will bring up the postgis container
`cd docker-geoserver && ./run.sh`

### Running the application: 
?

### Accessing Geoserver

[Geoserver](http://localhost:8080/geoserver/)
Username: admin
Password: geoserver

### Importing shape file into PostGIS:

Run:
```
shp2pgsql -s SRID <filepath> \
        | psql -d gis > /tmp/import1.log 2>/tmp/import1.err
```

### Adding layer into Geoserver:
1. Go to layers
2. Add a new resource
3. Add layer from demapp:demapp
4. It should show any available layers here from PostGIS
5. Select publish on your new layer
6. Enter "EPSG:27700" into the declared SRS field
7. In bounding boxes click: Compute from data and Compute from native bounds
8. Save