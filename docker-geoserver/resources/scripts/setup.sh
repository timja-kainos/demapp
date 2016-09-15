#!/usr/bin/env bash

function waitFor() {
    local condition=$1
    local logMessage=$2
    local errorMessage=$3
    local timeout=$4
    COUNTER=0
    until [  ${COUNTER} -eq ${timeout} ]; do
        echo ${logMessage}
        eval ${condition}
        if [ $? -eq 0 ]; then
            return 0
         fi
        sleep 1
        let COUNTER+=1
    done
    echo ${errorMessage}
    return 1
}

echo "Starting tomcat"
cd ${CATALINA_HOME}
bin/catalina.sh start

sleep 3

waitFor "grep 'org.apache.catalina.startup.Catalina.start Server startup' logs/catalina.$(date +%F).log" "Waiting for tomcat to startup" "Tomcat failed to startup" 60

set -e

cd /tmp/resources/scripts

echo "Setting up workspaces"
curl --fail --silent -u admin:geoserver -XPOST -H "Content-type: text/xml" \
  -d "<workspace><name>demapp</name></workspace>" \
  http://localhost:8080/geoserver/rest/workspaces

echo "Setting up datastore"
curl --fail --silent -u admin:geoserver -XPOST \
    -H "Content-type: application/xml" \
    -d  @data/demapp-datastore.xml \
  http://localhost:8080/geoserver/rest/workspaces/demapp/datastores

#echo "Setting up 'westminster_parliamentary_constituencies_december_2015_full_ext' dataset"
#curl --fail -u admin:geoserver -XPOST \
#    -H "Content-type: application/json" \
#    -d  @data/westminster-featureset.json \
#http://localhost:8080/geoserver/rest/workspaces/demapp/datastores/demapp/featuretypes > /dev/null
