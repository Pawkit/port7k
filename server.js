var http = require("http");

var PORT_G = 7000;
var PORT_B = 7500;

function handleRequest(request, response) {
	response.end("Woohoo! You can do it! Path hit: " + request.url)
}

var server = http.createServer(handleRequest);

server.listen(PORT_G, function(){
	console.log("Server listening on: http://localhost:%s", + PORT_G)
});