#!/bin/bash
docker kill geoserver > /dev/null
docker rm geoserver > /dev/null
docker kill geoserver-postgis > /dev/null
docker rm geoserver-postgis > /dev/null

DATA_DIR=~/geoserver_data
if [ ! -d $DATA_DIR ]
then
    mkdir -p $DATA_DIR
fi 

docker run --name="geoserver-postgis" -t -d timja/postgis

docker run \
	--name=geoserver \
	--link geoserver-postgis:postgis \
        -v $DATA_DIR:/opt/geoserver/data_dir \
	-p 8080:8080 \
	-d \
	-t timja/geoserver
