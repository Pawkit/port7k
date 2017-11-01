var http = require("http");

var PORT_G = 7000;
var PORT_B = 7500;

function handleRequest(request, response) {
	response.end("Keep it up.  You can do eeeeet! " + request.url)
}

function breakRequest(bash, response) {
	response.end("Come at me bro, you ain't got none." + bash.url)
}
var server_g = http.createServer(handleRequest);
var server_b = http.createServer(breakRequest);

server_g.listen(PORT_G, function(){
	console.log("Server listening on: http://localhost:%s", + PORT_G)
});

server_b.listen(PORT_B, function(){
	console.log("Server listening on: http://localhost:%s", + PORT_B)
})