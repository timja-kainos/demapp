#!/usr/bin/env bash

SQLDIR="/usr/share/postgresql/9.5/contrib/postgis-2.2/"
POSTGRES_USER=docker

# Note the dockerfile must have put the postgis.sql and spatialrefsys.sql scripts into /root/
# We use template0 since we want t different encoding to template1
echo "Creating template postgis"
createdb template_postgis -E UTF8 -T template0
echo "Enabling template_postgis as a template"
CMD="UPDATE pg_database SET datistemplate = TRUE WHERE datname = 'template_postgis';"
psql -c \"$CMD\"
echo "Loading postgis extension"
psql template_postgis -c 'CREATE EXTENSION postgis;'

if [[ ${HSTORE} == "true" ]]
then
    echo "Enabling hstore in the template"
    psql template_postgis -c 'CREATE EXTENSION hstore;'
fi
if [[ ${TOPOLOGY} == "true" ]]
then
    echo "Enabling topology in the template"
    psql template_postgis -c 'CREATE EXTENSION postgis_topology;'
fi

# Needed when importing old dumps using e.g ndims for constraints
echo "Loading legacy sql"
psql template_postgis -f $SQLDIR/legacy_minimal.sql
psql template_postgis -f $SQLDIR/legacy_gist.sql
# Create a default db called 'gis' that you can use to get up and running quickly
# It will be owned by the docker db user
createdb -O $POSTGRES_USER -T template_postgis gis

