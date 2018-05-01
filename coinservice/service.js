'use strict'

var dbs = require("./insertcoin.js")
var fbs = require("./findallcoins.js")
const restify = require('restify')
var corsMiddleware = require('restify-cors-middleware');

var cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*']
});

function addCoinCall(req, res, next) {
  const result = req.params.name + req.params.value+req.params.description
  console.log('%s:', result)
  dbs.addCoin(req.params.name,req.params.value,req.params.description)
  res.send(result)
  next()
}


function findAllCoinsCall(req, res, next) {
 fbs.findAll(function(result){
    res.send(JSON.stringify(result))
});
next()
}


const server = restify.createServer()
server.pre(cors.preflight)
server.use(cors.actual)

server.get('/addCoin/:name/:value/:description', addCoinCall)
server.get('/findAllCoins', findAllCoinsCall)
server.listen(8090, () => {
  console.log('%s listening at %s', server.name, server.url)
})
