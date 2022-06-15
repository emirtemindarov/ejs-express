var mongoose = require('mongoose')

var planetSchema = mongoose.Schema({
    title: String,
    nick: {
        type: String,
        unique: true,
        required: true
    },
    avatar: String,
    desc: String,
    created:{
        type:Date,
        default:Date.now
    }
})

Planet = mongoose.model("Planet", planetSchema)
module.exports.Planet = Planet
