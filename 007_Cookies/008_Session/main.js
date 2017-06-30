// Сеансы - один из способов хранения состояния
// Для работы с сеансами в express установим модуль express-session

var express = require('express');
var expressSession = require('express-session');

var app = express();

var secretValue = 'secret value';
// Функция 'express-session' принимает конфигурационный объект
app.use(expressSession({
    // сохраняет сеанс в хранилище заново, даже если запрос не изменялся
    resave : false,
    // если установленно значение true, приложение сохраняет новые данные, даже если они не менялись
    saveUninitialized : false,
    // ключ используемый для подписания cookie файла (идентификатора сеанса)
    secret: secretValue
}))

app.use('/', function(req, res){
   
    if(!req.session.flag){
        console.log('Set Session');
        // Записываем данные в сессию
        req.session.userName = 'Alex';
        req.session.flag = true;
    }   
    
    console.log(req.session.userName);
    // удаление кукиса
    //delete req.session.userName;

    res.end();

});

app.listen(8080, function(){
    console.log('Server start on port 8080');
});