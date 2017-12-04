var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function (req, res, next) {
  indexController.init(req, res);
});

router.put('/api/addToFav', function (req, res, next) {
  indexController.toggleFavorite(req, res);
});

module.exports = router;