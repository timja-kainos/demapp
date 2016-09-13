#!/usr/bin/env bash

docker stop geoserver-postgis > /dev/null
docker rm geoserver-postgis   > /dev/null

docker run -p 5432:5432 --name="geoserver-postgis" -td timja/postgis