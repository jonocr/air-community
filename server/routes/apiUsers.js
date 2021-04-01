const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');

router.post('/login', userController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
  //TODO: Clean res obj before sending back
  const user = { id: res.locals.user._id, firstName: res.locals.user.firstName, lastName: res.locals.user.lastName, email: res.locals.user.email, location: res.locals.user.location };
  res.status(200).json(user);

});

router.get('/', userController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.users);

});

router.get('/:email', userController.getUserByEmail, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post('/create', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.userId);
});

router.patch('/:email', userController.updateUser, (req, res) => {
  const user = { id: res.locals.user._id, firstName: res.locals.user.firstName, lastName: res.locals.user.lastName, email: res.locals.user.email, location: res.locals.user.location };
  res.status(200).json(user);
});

router.patch('/close/:email', userController.closeUser, (req, res) => {
  res.status(200).json({message: 'user is now inactive'});
});


module.exports = router;