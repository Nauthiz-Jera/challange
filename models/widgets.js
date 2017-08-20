const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WidgetSchema = new Schema({
  category: String,
  color: String,
  finish: String,
  haunted: String,
  quantity: Number,
  scent: String,
  shade: String,
  size: String,
});

const Widgets = mongoose.model('Widget', WidgetSchema, 'widgets');

module.exports = Widgets;
