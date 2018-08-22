const User = require("../models/User");

exports.create = (req, res) => {
  //validate the request
  if (
    !req.body.username ||
    !req.body.email ||
    !req.body.password ||
    !req.body.confirmPassword
  ) {
    return res.status(400).send({
      message: "Kindly fill in all required details"
    });
  }
  //Create a new user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.confirmPassword
  });
  user
    .save()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "An error occurred while trying to create the user" });
    });
};
