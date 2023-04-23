const http=require('http')


http.createServer(function(req, res) {
    res.writeHead(401, (console.log("Server not connected")))
    res.write("Service Connected")
    res.end();
}).listen(5000)