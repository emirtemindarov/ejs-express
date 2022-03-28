var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Меркурия */
router.get('/mercury', function(req, res, next) {
  res.send("<h1>Страница Меркурия</h1>")
});

/* Страница Венеры */
router.get('/venera', function(req, res, next) {
  res.send("<h1>Страница Венеры</h1>")
});

/* Страница Земли */
router.get('/earth', function(req, res, next) {
  res.send("<h1>Страница Земли</h1>")
});

/* Страница Марса */
router.get('/mars', function(req, res, next) {
  res.send("<h1>Страница Марса</h1>")
});

/* Страница Юпитера */
router.get('/jupiter', function(req, res, next) {
  res.send("<h1>Страница Юпитера</h1>")
});

module.exports = router;
