#!/bin/bash

DATADIR="/var/lib/postgresql/9.5/main"
CONF="/etc/postgresql/9.5/main/postgresql.conf"
POSTGRES="/usr/lib/postgresql/9.5/bin/postgres"
INITDB="/usr/lib/postgresql/9.5/bin/initdb"
SQLDIR="/usr/share/postgresql/9.5/contrib/postgis-2.2/"
LOCALONLY="-c listen_addresses='127.0.0.1, ::1'"

SETVARS="POSTGIS_ENABLE_OUTDB_RASTERS=1 POSTGIS_GDAL_ENABLED_DRIVERS=ENABLE_ALL"
su - postgres -c "$SETVARS $POSTGRES -D $DATADIR -c config_file=$CONF"