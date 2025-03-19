const express = require('express');
const router = express.Router();
const { checkData, postUser } = require('../Controllers/checkControler.js');
router.route('/').get(checkData).post(postUser);
module.exports = router;
