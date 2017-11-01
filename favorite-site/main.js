var http = require("http");

var PORT = 8234;

var server = http.createServer(fireRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function fireRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
      return displayHome(path, req, res);

    case "/css-":
      return displayShows(path, req, res);

    case "/movies.html"
    default:
      return display404(path, req, res);
  }
}