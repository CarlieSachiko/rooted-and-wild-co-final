var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bouquetSchema = new mongoose.Schema({
  name: String,
  flower_used: [String],
  occasion: [String],
  price: Number,
  image: String,
  details: String
});


module.exports = mongoose.model('Bouquet', bouquetSchema);
