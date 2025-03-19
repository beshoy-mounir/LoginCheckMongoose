const Users = require('../Models/checkModel.js');

exports.checkData = async (req, res) => {
  const userData = {
    username: req.query.username,
    password: req.query.password,
  };
  try {
    const valid = await Users.find(userData);

    valid[0] == undefined
      ? res.status(200).json({ status: 'fail', message: 'Not a vaild user' })
      : res.status(200).json({
          status: 'success',
          message: 'valid user',
        });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: { err },
    });
  }
};

exports.postUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: { err },
    });
  }
};
