var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/planets-ejs')
var Planet = require("./models/planet").Planet

var planet = new Planet({
    title: "Меркурий",
    nick: "mercury"
})

console.log(planet)
planet.save(function(err, planet, affected){
    console.log(planet.title)
})
