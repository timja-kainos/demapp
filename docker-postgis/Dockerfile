FROM kartoza/postgis:latest
MAINTAINER Tim Jacomb<t.jacomb@kainos.com> 

WORKDIR /tmp/resources/scripts
# http://gis.stackexchange.com/a/189879/82427
RUN apt-get install -y postgis

ADD resources /tmp/resources

RUN bash setup.sh
RUN bash setup-postgis.sh

USER postgres

RUN bash load-data.sh

CMD /usr/lib/postgresql/9.5/bin/postgres -D /var/lib/postgresql/9.5/main -c config_file=/etc/postgresql/9.5/main/postgresql.conf
