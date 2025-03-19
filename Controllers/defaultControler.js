exports.sayHello = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from default route ^^',
  });
};
