var cookieSession = require('cookie-session')
var express = require('express')

var app = express()

app.use(cookieSession({
    // Имя сессии
    name: 'session',
    // серкретные ключи
    keys: ['key1', 'key2']
}));

app.get('/', function (req, res, next) {
  console.log(req.ip)
  // Создаем свойство в сессии
  req.session.views = (req.session.views || 0) + 1;
  
  res.end(req.session.views + ' views')
})

app.listen(8080)