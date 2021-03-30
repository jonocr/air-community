const User = require('../models/userModel');

const userController = {};

userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    res.locals.users = users;
    return next();
  });
};

userController.getUserByEmail = (req, res, next) => {
  //TODO: Sanitize params
  const query = {
    email: req.params.email
  }
  User.findOne(query, (err, user) => {
    if (err) return next('Error in userController.getUserByEmail: ' + JSON.stringify(err));
    res.locals.user = user;
    return next();
  });
};

userController.createUser = (req, res, next) => {
  //TODO: Sanitize params
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location
  }
  User.create(newUser , (err, user) => {
    if (err) {
      res.redirect('/signup');
      return next('Error in userController.createUser: ' + JSON.stringify(err));
    }
    if (user) {
      res.locals.userId = user._id;
      return next();
    } else {
      return res.redirect('/signup');
    }
  });
};


userController.updateUser = (req, res, next) => {
  //TODO: Sanitize params
  const queryFilter = {
    email: req.params.email
  }
  const queryUpdate = {
    email: req.params.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location
  }
  User.updateOne(queryFilter, queryUpdate, (err, user) => {
    if (err) {
      res.redirect('/signup');
      return next('Error in userController.createUser: ' + JSON.stringify(err));
    }
    if (user) {
      res.locals.user= user;
      return next();
    } else {
      return res.redirect('/signup');
    }
  });
};

userController.closeUser = (req, res, next) => {
  //TODO: Sanitize params
  const queryFilter = {
    email: req.params.email
  }
  const queryUpdate = {
    status: 'inactive'
  }
  User.updateOne(queryFilter, queryUpdate, (err, user) => {
    if (err) {
      res.redirect('/signup');
      return next('Error in userController.createUser: ' + JSON.stringify(err));
    }
    if (user) {
      res.locals.user= user;
      return next();
    } else {
      return res.redirect('/signup');
    }
  });
};

module.exports = userController;