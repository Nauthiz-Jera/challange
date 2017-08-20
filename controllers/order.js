let Order = require('../models/order');

module.exports.submitOrder = function(req, res) {
  let newOrder = new Order({
    widgets: req.body,
  });
  newOrder.save(function(err) {
    if (err) console.log('Error on save.');
  });
};
