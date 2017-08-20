const express = require('express');
const router = express.Router();
const Widgets = require('../controllers/widgets');

router.post('/', Widgets.updateQuantity);

module.exports = router;
