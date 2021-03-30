const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems, (req, res) => {
  res.status(200).json(res.locals.items);
});

router.get('/:email', itemController.getItemsByName, (req, res) => {
  res.status(200).json(res.locals.item);
});

router.post('/create', itemController.createItem, (req, res) => {
  res.status(200).json(res.locals.itemId);
});

router.patch('/:email', itemController.updateItem, (req, res) => {
  res.status(200).json(res.locals.item);
});

router.patch('/:email', itemController.rentItem, (req, res) => {
  res.status(200).json(res.locals.item);
});

router.patch('/close/:email', itemController.deleteItem, (req, res) => {
  res.status(200).json({message: 'Item was deleted'});
});


module.exports = router;