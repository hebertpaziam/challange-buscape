const Product = require('../models/productModel');
const db = require('../database/mongoose');

exports.init = (req, res) => {
    var list;
    var cart;
    var subtotal = {
        installmentValue: 0,
        value: 0
    };

    Product.find().then((products) => {
        list = products;
    }).then(() => {
        Product.find({
            cart: true
        }).then((products) => {

            products.forEach((prod) => {
                subtotal.installmentValue += prod.price.installmentValue
                subtotal.value += prod.price.value
            })

            cart = products;

            res.render('index', {
                list: list,
                cart: cart,
                subtotal: subtotal
            })
        })
    });
}

exports.toggleFavorite = (req, res) => {
    Product.findOneAndUpdate({ productId: req.body.productId },  { favorite: req.body.favorite }).then((prod) => {
        res.render('index');
    })
}

exports.addToCart = (req, res) => {
    Product.findOneAndUpdate({ productId: req.body.productId },  { cart: true }).then((prod) => {
        res.render('index');
    })
}

exports.removeFromCart = (req, res) => {
    Product.findOneAndUpdate({ productId: req.body.productId },  { cart: false }).then((prod) => {
        res.render('index');
    })
}