let Widgets = require('../models/widgets');

module.exports.retrieveWidgets = function(req, res) {
  Widgets.find({}, function(err, widgets) {
    res.json(widgets);
  });
};

module.exports.updateQuantity = function(req, res) {
  Widgets.find({}, function(err, widgets) {
    if (err) throw err;
    req.body.map(function(widget) {
      Widgets.update({ _id: widget._id }, { $set: { quantity: widget.quantity } }, function(err) {
        if (err) throw err;
      });
    });
  });
};

module.exports.addWidget = function(req, res) {
  let newWidget = new Widgets({
    ...req.body,
  });
  newWidget.save(function(err) {
    if (err) console.log('Error on save.');
  });
};
