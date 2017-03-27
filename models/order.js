var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema({
  customer_id: String,
  total_price: Number,
  delivery_address: String,
  delivery_city: String,
  delivery_state: String,
  delivery_zipcode: String,
  items: [],
  payment_method: String,
  createdAt: {type: Date, default: Date.now}
})


module.exports = mongoose.model('Order', orderSchema);
