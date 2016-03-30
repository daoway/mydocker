var fs = require('fs');
var Docker = require('dockerode');

// "tcp://192.168.99.100:2376" - "from docker-machime ls" output
var docker = new Docker(
{
  protocol: 'https', //you can enforce a protocol
  host: '192.168.99.100',
  port: process.env.DOCKER_PORT || 2376,
  ca: fs.readFileSync('C:\\Users\\daoway\\.docker\\machine\\ca.pem'),
  cert: fs.readFileSync('C:\\Users\\daoway\\.docker\\machine\\cert.pem'),
  key: fs.readFileSync('C:\\Users\\daoway\\.docker\\machine\\key.pem')
}
);
var containerID = "681753fa046b";

// create a container entity. does not query API
var container = docker.getContainer(containerID);

// query API for container info
container.inspect(function (err, data) {
  console.log(data);
});