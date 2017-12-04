var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Product = new Schema({
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    images: [{ type: String, required: true }],
    price: {
        value:{ type: Number, required: true },
        installments:{ type: Number, required: true },
        installmentValue:{ type: Number, required: true }
    },
    cart:{ type: Boolean, required: true },
    favorite:{ type: Boolean, required: true },
    bestPrice:{ type: Boolean, required: true },
});

module.exports = mongoose.model('Product', Product);