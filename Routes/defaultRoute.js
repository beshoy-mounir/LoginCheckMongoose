const express = require('express');
const router = express.Router();
// Controllers
const { sayHello } = require('../Controllers/defaultControler.js');
// handlers
router.route('/').get(sayHello);
module.exports = router;
