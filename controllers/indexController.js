const Product = require('../models/productModel');
const db = require('../database/mongoose');

exports.renderIndex = (req, res) => {
    var list
    var cart
    Product.find().then((products) => {
        list = products;
    }).then(() => {
        Product.find({
            cart: true
        }).then((products) => {
            cart = products;
            res.render('index', {
                list: list,
                cart: cart
            });
        })
    });
}