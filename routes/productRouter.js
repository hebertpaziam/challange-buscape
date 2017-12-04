const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


/* GET users listing. */
router.put('/addToFavorites', function (req, res, next) {
  productController.addToFavorites(req, res)
});
router.put('/removeFromFavorites', function (req, res, next) {
  productController.removeFromFavorites(req, res);
});


module.exports = router;