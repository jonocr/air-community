const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems, (req, res) => {
  res.status(200).json(res.locals.items);
});

router.get('/:name', itemController.getItemsByName, (req, res) => {
  res.status(200).json(res.locals.items);
});

router.post('/create', itemController.createItem, (req, res) => {
  res.status(200).json(res.locals.itemId);
});

router.patch('/:itemId', itemController.updateItem, (req, res) => {
  res.status(200).json(res.locals.item);
});

router.patch('/rent/:itemId', itemController.rentItem, (req, res) => {
  res.status(200).json(res.locals.item);
});
router.patch('/return/:itemId', itemController.returnItem, (req, res) => {
  res.status(200).json(res.locals.item);
});

router.delete('/delete/:itemId', itemController.deleteItem, (req, res) => {
  res.status(200).json({message: 'Item was deleted'});
});


module.exports = router;