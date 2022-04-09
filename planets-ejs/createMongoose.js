var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/planets-ejs')
var Planet = require("./models/planet").Planet
var async = require("async")

function open(callback){
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createHeroes(callback){
    async.parallel([
            function(callback){
                var mercury = new Planet({nick:"mercury"})
                mercury.save(function(err,mercury){
                    callback(err,"mercury")
                })
            },
            function(callback){
                var venera = new Planet({nick:"venera"})
                venera.save(function(err,venera){
                    callback(err,"venera")
                })
            },
            function(callback){
                var earth = new Planet({nick:"earth"})
                earth.save(function(err,earth){
                    callback(err,"earth")
                })
            }
        ],
        function(err,result){
            callback(err)
        })
}

function close(callback){
    mongoose.disconnect(callback)
}


async.series([
    open,
    dropDatabase,
    createHeroes,
    close
],
function(err,result){
    if(err) throw err
    console.log("ok")
})

