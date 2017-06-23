var MongoClient = require('mongodb').MongoClient;
var products = require('./user.json');
var path = require('path');
var urlParse = require('url');
var parser = require('body-parser');
var pa

var express = require('express');
var app = express();
// 
var urlDb = 'mongodb://localhost:27017/myDb';
var url = 'http://localhost/';

// MongoClient.connect(urlDb, function(err, db){
//     db.collection('products').insertMany(products, function(err, res){
//         if(err) throw err;
//         console.log(res.ops);
//     });
// });
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use(function(req, res, next){
    if(req.url == '/'){
        res.sendFile(path.join(__dirname, 'index.html'));
    }
    else if(req.url == '/all' && req.method == 'GET'){
        MongoClient.connect(urlDb, function(err, db){
            db.collection('products').find().toArray(function(err, data){
                res.writeHead(200, { 'Content-Type' : 'application/json'});
                console.log(JSON.stringify(data));
                res.write(JSON.stringify(data));
                res.end();
            })
        });
    }
    else if(req.url == '/addItem') {
        var query = req.body;
        console.log(query)
         MongoClient.connect(urlDb, function(err, db){             
            db.collection('products').insertOne(query, function(err, result){
                if(err) throw err;
                console.log(result.ops[0])
                res.write(JSON.stringify(result.ops[0]));
                res.end();
            })
        });
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found 404');
    }
});
app.listen(8080, function(){
    console.log('Server started on 8080 port!');
});