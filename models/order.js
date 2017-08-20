const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  widgets: { type: Array },
});

const Order = mongoose.model('Order', OrderSchema, 'orders');
module.exports = Order;
