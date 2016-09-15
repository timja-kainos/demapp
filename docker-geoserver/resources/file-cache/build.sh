#!/usr/bin/env bash

GS_VERSION=2.8.2

cd $(cd -P -- "$(dirname -- "$0")" && pwd -P)

wget -c http://downloads.sourceforge.net/project/geoserver/GeoServer/${GS_VERSION}/geoserver-${GS_VERSION}-war.zip
wget -c http://download.java.net/media/jai/builds/release/1_1_3/jai-1_1_3-lib-linux-amd64.tar.gz
wget -c http://download.java.net/media/jai-imageio/builds/release/1.1/jai_imageio-1_1-lib-linux-amd64.tar.gz