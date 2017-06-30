var http = require('http');
var Cookies = require('cookies');

http.createServer(function(req, res){
    // для работы с куками через модуль cookies необходимо создать объект куки
    var cookies = new Cookies(req, res);
    // Устанавливая куку без параметров, она будет жить только во время сессии (до тех пор, пока пользователь находится на странице), после закрытия страницы, она удаляется
    //cookies.set('admin', 'true');

    console.log(cookies.get('admin'));

    res.end();

}).listen(8080, function(){
    console.log('Server start on port', 8080);
})