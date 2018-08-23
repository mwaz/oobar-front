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
    confirmPassword: req.body.confirmPassword
  });
  console.log(user);
  user
    .save()
    .then(data => {
      res.status(200).send(data);
      console.log(`Data step 2 ${data}`);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while trying to create the user"
      });
    });
};
