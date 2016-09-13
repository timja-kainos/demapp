FROM kartoza/postgis:latest
MAINTAINER Tim Jacomb<t.jacomb@kainos.com> 

# http://gis.stackexchange.com/a/189879/82427
RUN apt-get install -y postgis

ADD resources /tmp/resources

RUN sh /tmp/resources/scripts/setup-postgis.sh

USER postgres

RUN /etc/init.d/postgresql start && \
    shp2pgsql -s SRID /tmp/resources/data/Westminster_Parliamentary_Constituencies_December_2015_Full_Extent_Boundaries_in_Great_Britain.shp \
        | psql -d gis > /tmp/import1.log 2>/tmp/import1.err

RUN /etc/init.d/postgresql stop

CMD /usr/lib/postgresql/9.5/bin/postgres -D /var/lib/postgresql/9.5/main -c config_file=/etc/postgresql/9.5/main/postgresql.conf
