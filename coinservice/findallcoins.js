
var findAll = function(callback){
  var MongoClient = require('mongodb').MongoClient;
  // Connection URL
  var url = 'mongodb://localhost:27017/coinsdata';
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err,db) {
    if (err) throw err
    const collection = db.collection('coinsdata');
    collection.find({}).toArray(function(err, docs) {
    console.log("Found the following records");
     console.dir(docs);
      callback(docs);
    });
  });
}

module.exports = {
findAll: findAll
}
