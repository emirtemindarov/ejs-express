var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/planets-ejs')
var Planet = require("./models/planet").Planet
var async = require("async")

mongoose.connection.on("open",function(){
    var db = mongoose.connection.db
    db.dropDatabase(function(err){
        if(err) throw err;
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
            if(err){
                console.log(err)
            } else {
                console.log("Успешно созданы планеты с никами: " + result.join(", "))
            }
            mongoose.disconnect()
        })
    })
})
