var express = require('express')
var router = express.Router()
var checkAuth = require("./../middleware/checkAuth.js")
var Planet = require("../models/planet").Planet
var async = require("async")

/* GET users listing. */
router.get('/planets', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с planets')
});

/* Страница героев */
router.get('/:nick', checkAuth, function(req, res, next) {
    async.parallel([
            function(callback){
                Planet.findOne({nick:req.params['nick']}, callback)
            },
            function(callback){
                Planet.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var planet = result[0]
            var planets = result[1]
            console.log(planets)       
            if(!planet) return next(new Error("Нет такого героя в этой книжке"))
            res.render('planets', {   
                title: planet.title,
                picture: planet.avatar,
                desc: planet.desc,
                menu: planets
            });
        })
})

module.exports = router
