//2. Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
  //if url == "/" && GET
  if(request.url == "/") {
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
  //if url == "/" && POST
    //redirect to /:username
}
//3. Handle HTTP route GET /:username i.e. /chalkers
function userRoute(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write(username + "\n");
    response.end("Footer\n");
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error
  }
}
