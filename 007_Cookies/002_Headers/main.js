var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    console.log('Cookies from client:', req.headers['cookie']);   

    fs.readFile('./index.html', function(err, data){        
        
        // Метод позволяет записать в заголовок только один кукис
        res.setHeader('Set-Cookie', 'TestHeader=HeaderValue');

        // Метод позволяет задать статус код ответа и объект с заголовками
        //res.writeHead(200, { 'Set-Cookie': ['item1=value1', 'item2=value2']});

        // Метод принимает имя заголовка - первым параметром и его значение - вторым параметром
        //res.setHeader('Set-Cookie', ['item1=value1', 'item2=value2'] );

        console.log('Method getCookie():', res.getHeader('Set-Cookie'));
        // записываем в ответ содержиое файла
        res.write(data);
        res.end();
    })

}).listen(8080, function(){
    console.log('Server start on port', 8080);
})