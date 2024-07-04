var http = require ('http');

http.createServer (function (req,res){
    res.writeHead(200, {'Content-Type':'text/json'});
    res.end (JSON.stringify({"numero":"1", "nome" : "joão"}))
}).listen(8080);

