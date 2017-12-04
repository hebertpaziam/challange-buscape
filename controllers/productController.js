const Product = require('../models/productModel');
const db = require('../db/mongoose');

exports.addToFavorites = (req, res) => {
    const obj = new Product();
    obj.findOne({id:req.body.id}, (err, product)=>{
        product.favorite = true;
        product.save().then((doc) => {
            res.render('index', {
                res:"adicionado"
            })
        }, (e) => {
            res.status(400).send(e);
        });
    }); 
};

exports.removeFromFavorites = (req, res) => {
    const obj = new Product();
    obj.findOne({id:req.body.id}, (err, product)=>{
        product.favorite = false;
        product.save().then((doc) => {
            res.render('index', {
                res:"removido"
            })
        }, (e) => {
            res.status(400).send(e);
        });
    }); 
};