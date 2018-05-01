
var params ={}

var addCoin = function(coinname,coinvalue,coindescription){
  const {MongoClient} = require('mongodb')
  const client = new MongoClient()
  params = {
    name: coinname,
    value: coinvalue,
    description: coindescription
  }

client.connect('mongodb://localhost:27017/coinsdata', ready)
}



var ready = function(err, db) {
  if (err) throw err
  const collection = db.collection('coinsdata')
if (params.name && params.value && params.description) {
    collection.insert({
      name: params.name,
      value: params.value,
      description: params.description
    }, (err) => {
      if (err) throw err
    });
  }

    collection.find({
      name: params.name

    }).each((err, doc) => {
      if (err) throw err
      if (!doc) {
        db.close()
        return
      }
      console.log('%s: %s  %s \n', doc.name, doc.value, doc.description)
    })
    return

  db.close()

}

module.exports = {
addCoin: addCoin,
ready: ready
}
