const express = require('express');

const router = express.Router();
const {
  checkData,
  postUser,
  getUserData,
} = require('../Controllers/checkControler.js');

router.route('/').get(checkData).post(postUser);
router.route('/:id').get(getUserData);

module.exports = router;
