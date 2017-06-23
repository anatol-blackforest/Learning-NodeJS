var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/userCollectionDB';

// Для удаления объектов (документов) из коллекции используется используется несколько методов
    // deleteMany()         - удаляет все документы, которые соответствуют определенному критерию
    // deleteOne()          - удаляет один документ, который соответствует определенному критерию
    // findOneAndDelete()   - получает и удаляет один документ, который соответствует определенному критерию
    // drop()               - удаляет всю коллекцию

MongoClient.connect(url, function(err, db){
    var collection = db.collection('users');

    // collection.insertOne({name : "Ivan"}, function(err, res){
    //     console.log(res.ops);
    //     collection.deleteOne({name: "Ivan"}, function(err, result){ 
    //         console.log(result)            
    //         collection.find({name : 'Ivan'}).toArray(function(err, res){
    //             console.log(res);
    //         })
    //     });
    // });
    // db.collection("users").findOneAndDelete({ age : 25 }, function(err, result){             
    //     console.log(result);
    //     db.close();
    // });
        
    collection.deleteMany({name: "Sergey"}, function(err, result){             
        console.log(result);
        db.close();
    });
});