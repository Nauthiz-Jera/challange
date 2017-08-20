const express = require('express');
const router = express.Router();
const Widgets = require('../controllers/widgets');

/* GET users listing. */
router.post('/', Widgets.addWidget);

module.exports = router;
