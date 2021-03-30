const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

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
  res.status(200).json(res.locals.user);
});

router.patch('/close/:email', userController.closeUser, (req, res) => {
  res.status(200).json({message: 'user is now inactive'});
});


module.exports = router;