FROM kartoza/postgis:latest
MAINTAINER Tim Jacomb<t.jacomb@kainos.com> 

# http://gis.stackexchange.com/a/189879/82427
RUN apt-get install -y postgis

ADD resources /tmp/resources

RUN shp2pgsql -s SRID /tmp/resources/data/Westminster_Parliamentary_Constituencies_December_2015_Full_Extent_Boundaries_in_Great_Britain.shp \
             > /tmp/resources/data/Westminster_Parliamentary_Constituencies_December_2015_Full_Extent_Boundaries_in_Great_Britain.sql



CMD /tmp/resources/scripts/start-postgis.sh



