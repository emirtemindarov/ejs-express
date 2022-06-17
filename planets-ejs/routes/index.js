var express = require('express')
var router = express.Router()
var Planet = require("./../models/planet").Planet
var User = require("./../models/user").User


/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.greeting = "Hi!!!"
  Planet.find({},{_id:0,title:1,nick:1},function(err,menu){
    res.cookie('greeting', 'Hi!!!').render('index', { title: 'Express', menu: menu, counter: req.session.counter  });
  });
});

/* GET auth page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход', error:null});
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
  res.locals.user = null
  req.session.destroy()
  res.redirect('/')
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password

  User.findOne({username:username},function(err,user){
    if(err) return next(err)
    if(user){
	    // Пользователь найден
      if(user.checkPassword(password)){
        // Пароль верный
        req.session.user = user._id
        res.redirect('/')
      } else {
        // Пароль НЕ верный
        res.render('logreg',{title: 'Вход', error:"Пароль не верный"});
      }
    } else {
	    // Пользователь НЕ найден
      var user = new User({username:username,password:password})
      user.save(function(err,user){
        if(err) return next(err)
        req.session.user = user._id
        res.redirect('/')
      })
    }
  }
)});

  


module.exports = router;





















// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.cookie('greeting', 'Hi!!!').render('index', { title: 'Express', menu: menu });  
// });







// /* Страница Меркурия */
// router.get('/mercury', function(req, res, next) {
//   res.render('planets', {
//       title: "Меркурий",
//       picture: "images/mercury.webp",
//       desc: "Ближайшая к Солнцу планета Солнечной системы, наименьшая из планет земной группы."
//   });
// });

// /* Страница Венеры */
// router.get('/venera', function(req, res, next) {
//   res.render('planets', {
//       title: "Венера",
//       picture: "images/venera.webp",
//       desc: "Вторая по удалённости от Солнца и шестая по размеру планета Солнечной системы, наряду с Меркурием, Землёй и Марсом принадлежащая к семейству планет земной группы."
//   });
// });

// /* Страница Земли */
// router.get('/earth', function(req, res, next) {
//   res.render('planets', {
//       title: "Земля",
//       picture: "images/earth.webp",
//       desc: "Третья по удалённости от Солнца планета Солнечной системы. Самая плотная, пятая по диаметру и массе среди всех планет и крупнейшая среди планет земной группы, в которую входят также Меркурий, Венера и Марс."
//   });
// });

// /* Страница Марса */
// router.get('/mars', function(req, res, next) {
//   res.render('planets', {
//       title: "Марс",
//       picture: "images/mars.webp",
//       desc: "Четвёртая по удалённости от Солнца и седьмая по размеру планета Солнечной системы; масса планеты составляет 10,7 % массы Земли."
//   });
// });

// /* Страница Юпитера */
// router.get('/jupiter', function(req, res, next) {
//   res.render('planets', {
//       title: "Юпитер",
//       picture: "images/jupiter.webp",
//       desc: "Крупнейшая планета Солнечной системы, пятая по удалённости от Солнца. Наряду с Сатурном, Ураном и Нептуном, Юпитер классифицируется как газовый гигант."
//   });
// });


