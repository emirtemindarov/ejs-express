var express = require('express');
var router = express.Router();
var planet = require("../models/planet").Planet

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с planet');
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
    console.log(`получение параметра ${req.params['nick']}`)
    planet.findOne({nick:req.params['nick']}, function(err,planet){
        console.log()
        if(err) return next(err)
        if(!planet) return next(new Error("Нет такого планеты"))
        res.render('planets', {
            title: planet.title,
            picture: planet.avatar,
            desc: planet.desc
        })
    })
    console.log(planet)
})

module.exports = router;
