var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
    console.log('Connection established!');
    // Завершает конфигурацию ответа
    response.end();
    // response.end("Responce is configured!", 'utf8', () => { console.log('finish'); });
});

server.listen(8080, function(){
    console.log('Server running on port 8080');
});