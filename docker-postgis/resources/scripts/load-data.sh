#!/usr/bin/env bash

/etc/init.d/postgresql start

sleep 2

shp2pgsql -s SRID ../data/Westminster_Parliamentary_Constituencies_December_2015_Full_Extent_Boundaries_in_Great_Britain.shp \
    | psql -d gis > /tmp/import1.log 2>/tmp/import1.err

shp2pgsql -s SRID ../data/Census_Merged_Wards_December_2011_Generalised_Clipped_Boundaries_in_England_and_Wales.shp \
    | psql -d gis > /tmp/import1.log 2>/tmp/import1.err

psql -d gis -f load.sql

psql -d gis -c "\copy postcode_lookup FROM '../data/National_Statistics_Postcode_Lookup_August_2016_Centroids.csv' DELIMITER ',' CSV"

psql -d gis -c "\copy population FROM '../data/population.csv' DELIMITER ',' CSV"
