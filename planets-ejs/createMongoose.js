var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/planets-ejs')
// var Planet = require("./models/planet").Planet
var async = require("async")
var data = require('./data.js').data;

function open(callback){
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function requireModels(callback){
    require("./models/planet").Planet

    async.each(Object.keys(mongoose.models),function(modelName){
        mongoose.models[modelName].ensureIndexes(callback)
    },
        callback
    )
}

function createHeroes(callback){
    async.each(data, function(planetData, callback){
           var planet = new mongoose.models.Planet(planetData);
            planet.save(callback);
        },
        callback);
};

function close(callback){
    
}



async.series([
    open,
    dropDatabase,
    requireModels,
    createHeroes
],
function(err,result){
    mongoose.disconnect()
})

