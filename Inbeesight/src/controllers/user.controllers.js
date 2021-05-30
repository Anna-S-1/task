const User = require('../models/user.model.js');
// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
User.find()
  .then(users => {
  res.send(users);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of users."
});
});
};
// Create and Save a new User
exports.create = (req, res) => {
// Validate request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Create a new User
const user = new User({
  first_name: req.body.first_name,
  last_name: req.body.last_name,
  email: req.body.email,
  age: req.body.age
});
// Save user in the database
user.save()
  .then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while creating new user."
});
});
};

