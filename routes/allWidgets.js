const express = require('express');
const router = express.Router();
const Widgets = require('../controllers/widgets');

router.get('/', Widgets.retrieveWidgets);

module.exports = router;
