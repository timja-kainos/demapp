name := "map-demo"

version := "0.0.1-SNAPSHOT"

maintainer := "Tim Jacomb<t.jacomb@kainos.com>"

lazy val `map-demo` = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( javaJdbc ,  cache , javaWs )

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

(checkstyle in Compile) <<= (checkstyle in Compile) triggeredBy (compile in Compile)

(checkstyle in Test) <<= (checkstyle in Test) triggeredBy (compile in Test)

checkstyleSeverityLevel := Some(CheckstyleSeverityLevel.Warning)

dockerExposedPorts in Docker := Seq(9000)
// run this with: docker run -p 9000:9000 <name>:<version>


