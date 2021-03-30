const Item = require('../models/itemModel');

const itemController = {};

itemController.getAllItems = (req, res, next) => {
  Item.find({}, (err, items) => {
    if (err) return next('Error in itemController.getAllItems: ' + JSON.stringify(err));
    res.locals.items = items;
    return next();
  });
};

itemController.getItemsByName = (req, res, next) => {
  //TODO: Sanitize params
  const query = {
    name: req.params.name
  }
  Item.find(query, (err, items) => {
    if (err) return next('Error in itemController.getItemsByName: ' + JSON.stringify(err));
    res.locals.items = items;
    return next();
  });
};

itemController.createItem = (req, res, next) => {
  console.log("itemController.createItem: ", req.body);
  //TODO: Sanitize params
  const newItem = {
    name: req.body.name,
    description: req.body.description,
    ownerId: req.body.ownerId,
    cost: req.body.cost
  }
  Item.create(newItem , (err, item) => {
    if (err) {
      console.log("itemController Item.create ERR: ", err);
      return next('Error in itemController.createItem: ' + JSON.stringify(err));
    }
    console.log("itemController Item.create: ", item);
    if (item) {
      res.locals.itemId = Item._id;
      return next();
    } else {
      return res.redirect('/create-item');
    }
  });
};


itemController.updateItem = (req, res, next) => {
  //TODO: Sanitize params
  const queryFilter = {
    email: req.params.email
  }
  const queryUpdate = {
    name: req.body.name,
    description: req.body.description,
    ownerId: req.body.ownerId,
    cost: req.body.cost
  }
  Item.updateOne(queryFilter, queryUpdate, (err, item) => {
    if (err) {
      res.redirect('/signup');
      return next('Error in itemController.updateItem: ' + JSON.stringify(err));
    }
    if (item) {
      res.locals.item= user;
      return next();
    } else {
      return res.redirect('/signup');
    }
  });
};

itemController.rentItem = (req, res, next) => {
  //TODO: Sanitize params
  const queryFilter = {
    email: req.params.email
  }
  const queryUpdate = {
    status: 'rented'
  }
  Item.updateOne(queryFilter, queryUpdate, (err, item) => {
    if (err) {
      res.redirect('/signup');
      return next('Error in itemController.deleteItem: ' + JSON.stringify(err));
    }
    if (item) {
      res.locals.item= user;
      return next();
    } else {
      return res.redirect('/signup');
    }
  });
};

itemController.deleteItem = (req, res, next) => {
  //TODO: Sanitize params
  const queryFilter = {
    email: req.params.email
  }
  const queryUpdate = {
    status: 'inactive'
  }
  Item.updateOne(queryFilter, queryUpdate, (err, item) => {
    if (err) {
      res.redirect('/signup');
      return next('Error in itemController.deleteItem: ' + JSON.stringify(err));
    }
    if (item) {
      res.locals.item= user;
      return next();
    } else {
      return res.redirect('/signup');
    }
  });
};

module.exports = itemController;