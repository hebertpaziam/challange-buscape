var mongoose = require('mongoose');
mongoose.connect("mongodb://master:master@ds011715.mlab.com:11715/dbapp");

var db = mongoose.connection;

module.exports = mongoose;