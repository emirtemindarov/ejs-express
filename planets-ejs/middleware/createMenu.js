var Planet = require("./../models/planet").Planet

var CreateMenu = function(req,res,next){
    res.locals.nav = []

    Planet.find(null,{_id:0,title:1,nick:1},function(err,result){
        if(err) throw err
        res.locals.nav = result
        next()
    })
}

module.exports.CreateMenu = CreateMenu
