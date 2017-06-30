var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    console.log(req.headers['cookie']);

    fs.readFile('./index.html', function(err, data){
        res.write(data);
        res.end();
    })

}).listen(8080, function(){
    console.log('Server start on port', 8080);
})