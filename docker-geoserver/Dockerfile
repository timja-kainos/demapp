#--------- Generic stuff all our Dockerfiles should start with so we get caching ------------
FROM tomcat:8.0
MAINTAINER Tim Sutton<tim@linfiniti.com>

RUN  export DEBIAN_FRONTEND=noninteractive
ENV  DEBIAN_FRONTEND noninteractive
RUN  dpkg-divert --local --rename --add /sbin/initctl
#RUN  ln -s /bin/true /sbin/initctl

# Use local cached debs from host (saves your bandwidth!)
# Change ip below to that of your apt-cacher-ng host
# Or comment this line out if you do not with to use caching
ADD 71-apt-cacher-ng /etc/apt/apt.conf.d/71-apt-cacher-ng

RUN apt-get -y update

#-------------Application Specific Stuff ----------------------------------------------------

ENV GS_VERSION 2.8.2
ENV GEOSERVER_DATA_DIR /opt/geoserver/data_dir

RUN mkdir -p $GEOSERVER_DATA_DIR

# Set JAVA_HOME to /usr/lib/jvm/default-java and link it to OpenJDK installation
RUN ln -s /usr/lib/jvm/java-7-openjdk-amd64 /usr/lib/jvm/default-java
ENV JAVA_HOME /usr/lib/jvm/default-java

ADD resources /tmp/resources

#Add JAI and ImageIO for great speedy speed.
WORKDIR /tmp/resources/file-cache
RUN if [ ! -f /tmp/resources/file-cache/jai-1_1_3-lib-linux-amd64.tar.gz ]; then \
       wget http://download.java.net/media/jai/builds/release/1_1_3/jai-1_1_3-lib-linux-amd64.tar.gz; \
    fi; \
    if [ ! -f /tmp/resources/file-cache/jai_imageio-1_1-lib-linux-amd64.tar.gz ]; then \
       wget http://download.java.net/media/jai-imageio/builds/release/1.1/jai_imageio-1_1-lib-linux-amd64.tar.gz; \
    fi; \
    gunzip -c jai-1_1_3-lib-linux-amd64.tar.gz | tar xf - && \
    gunzip -c jai_imageio-1_1-lib-linux-amd64.tar.gz | tar xf - && \
    mv /tmp/resources/file-cache/jai-1_1_3/lib/*.jar $JAVA_HOME/jre/lib/ext/ && \
    mv /tmp/resources/file-cache/jai-1_1_3/lib/*.so $JAVA_HOME/jre/lib/amd64/ && \
    mv /tmp/resources/file-cache/jai_imageio-1_1/lib/*.jar $JAVA_HOME/jre/lib/ext/ && \
    mv /tmp/resources/file-cache/jai_imageio-1_1/lib/*.so $JAVA_HOME/jre/lib/amd64/

WORKDIR $CATALINA_HOME

# A little logic that will fetch the geoserver war zip file if it
# is not available locally in the resources dir
RUN if [ ! -f /tmp/resources/file-cache/geoserver-${GS_VERSION}-war.zip ]; then \
    wget -c http://downloads.sourceforge.net/project/geoserver/GeoServer/${GS_VERSION}/geoserver-${GS_VERSION}-war.zip \
      -O /tmp/resources/file-cache/geoserver.zip; \
    fi; \
    unzip -qq /tmp/resources/file-cache/geoserver-${GS_VERSION}-war.zip -d /tmp/geoserver \
    && unzip -qq /tmp/geoserver/geoserver.war -d $CATALINA_HOME/webapps/geoserver \
    && rm -rf $CATALINA_HOME/webapps/geoserver/data \
    && rm -rf /tmp/geoserver

# Install any plugin zip files in resources/plugins
RUN if ls /tmp/resources/plugins/*.zip > /dev/null 2>&1; then \
      for p in /tmp/resources/plugins/*.zip; do \
        unzip $p -d /tmp/gs_plugin \
        && mv /tmp/gs_plugin/*.jar $CATALINA_HOME/webapps/geoserver/WEB-INF/lib/ \
        && rm -rf /tmp/gs_plugin; \
      done; \
    fi

# Overlay files and directories in resources/overlays if they exist
RUN rm /tmp/resources/overlays/README.txt && \
    if ls /tmp/resources/overlays/* > /dev/null 2>&1; then \
      cp -rf /tmp/resources/overlays/* /; \
    fi;

# Remove Tomcat manager, docs, and examples
RUN rm -rf $CATALINA_HOME/webapps/ROOT && \
    rm -rf $CATALINA_HOME/webapps/docs && \
    rm -rf $CATALINA_HOME/webapps/examples && \
    rm -rf $CATALINA_HOME/webapps/host-manager && \
    rm -rf $CATALINA_HOME/webapps/manager

#---------- Demapp specific actions -----------------
RUN bash /tmp/resources/scripts/setup.sh

# Delete resources after installation
RUN rm -rf /tmp/resources
