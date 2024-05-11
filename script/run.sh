echo "Downloading Web Server..."
wget -O webserver.jar http://de-prem-01.hosts.optikservers.com:35334/projects/gh/JavaWS-1.0-fat.jar
java -version
echo "Running WebServer..."
java -jar webserver.jar