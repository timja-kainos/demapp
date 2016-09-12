#!/usr/bin/env bash

docker stop geoserver-postgis > /dev/null
docker rm geoserver-postgis   > /dev/null

docker run --name="geoserver-postgis" -td timja/postgis