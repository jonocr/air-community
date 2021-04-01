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
    name: { 
      $regex: '.*' + req.params.name + '.*', 
      $options: 'i'
    } 
  }
  Item.find(query, (err, items) => {
    if (err) return next('Error in itemController.getItemsByName: ' + JSON.stringify(err));
    res.locals.items = items;
    return next();
  }).limit(10);
};

itemController.getItemsById = (req, res, next) => {
  //TODO: Sanitize params
  const query = {
    _id: req.params.itemId
  }
  Item.findOne(query, (err, item) => {
    if (err) return next('Error in itemController.getItemsById: ' + JSON.stringify(err));
    res.locals.item = item;
    return next();
  });
};

itemController.createItem = (req, res, next) => {
  //TODO: Sanitize params
  const newItem = {
    name: req.body.name,
    description: req.body.description,
    ownerId: req.body.ownerId,
    cost: req.body.cost
  }
  Item.create(newItem , (err, item) => {
    if (err) {
      return next('Error in itemController.createItem: ' + JSON.stringify(err));
    }
    if (item) {
      res.locals.item = item;
      return next();
    } else {
      return res.redirect('/create-item');
    }
  });
};


itemController.updateItem = (req, res, next) => {
  //TODO: Sanitize params
  const queryFilter = {
    _id: req.params.itemId
  }
  const queryUpdate = {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost
  }
  Item.updateOne(queryFilter, queryUpdate, (err, item) => {
    if (err) {
      return next('Error in itemController.updateItem: ' + JSON.stringify(err));
    }
    if (item) {
      res.locals.item = item;
      return next();
    } else {
      return res.redirect('/items');
    }
  });
};

itemController.rentItem = (req, res, next) => {
  //TODO: Sanitize params
  const queryFilter = {
    _id: req.params.itemId
  }
  const queryUpdate = {
    renterId: req.body.renterId,
    status: 'rented'
  }
  Item.findOneAndUpdate(queryFilter, queryUpdate, { new: true }, (err, item) => {
    if (err) {
      return next('Error in itemController.rentItem: ' + JSON.stringify(err));
    }
    res.locals.item= item;
    return next();
  });
};

itemController.returnItem = (req, res, next) => {
  //TODO: Sanitize params
  const queryFilter = {
    _id: req.params.itemId
  }
  const queryUpdate = {
    renterId: '',
    status: 'available'
  }
  Item.findOneAndUpdate(queryFilter, queryUpdate, { new: true },(err, item) => {
    if (err) {
      return next('Error in itemController.returnItem: ' + JSON.stringify(err));
    }
    res.locals.item= item;
    return next();
  });
};

itemController.deleteItem = (req, res, next) => {
  //TODO: Sanitize params
  const query = {
    _id: req.params.itemId
  }
  Item.deleteOne(query, (err) => {
    if (err) {      
      return next('Error in itemController.deleteItem: ' + JSON.stringify(err));
    }
    return next();   
  });
};

module.exports = itemController;