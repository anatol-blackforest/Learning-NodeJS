var express = require('express');
var app = express();

var port = 8080;

// middleware - в терминологии express - это функции, имеющие доступ к объекту запроса (req), 
// объекту ответа (res) и к следующей функции промежуточной обработки в цикле “запрос-ответ” приложения.
app.use(function (req, res) {
    res.send('Hello from express!');
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
}); 
