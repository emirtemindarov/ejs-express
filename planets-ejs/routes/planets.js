var express = require('express')
var router = express.Router()
var Planet = require("../models/planet").Planet
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с planet')
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
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
            var planets = result[1] || []
            if(!planet) return next(new Error("Нет такого героя в этой книжке"))
            console.log('gg')
            res.render('planets', {      // <---- здесь ошибка
                title: planet.title,
                picture: planet.avatar,
                desc: planet.desc,
                menu: planets
            });
        })
})

module.exports = router
