const Session = require('../models/sessionModel');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/ 
sessionController.isLoggedIn = (req, res, next) => {
  //console.log('ssid: ', typeof req.cookies.ssid);
  //Object.prototype.hasOwnProperty.call(res.locals, 'ssid')
  if (!Object.prototype.hasOwnProperty.call(req.cookies, 'ssid')) return res.redirect('/login');
  Session.findOne({ cookieId: req.cookies.ssid }, (err, session) => {
    // if a database error occurs, call next with the error message passed in
    if (err) {
      // res.redirect('/signup');
      return next('Error in sessionController.isLoggedIn: ' + JSON.stringify(err));
    }
    if (session) {
      return next();
    } else {
      return res.redirect('/login');
    }
  });
};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
  // cookieId: { type: String, required: true, unique: true },
  // createdAt: { type: Date, expires: 30, default: Date.now }
  //write code here
  //invoke SessionModel create fn. pass values. if success then call next()
  Session.create({ cookieId: res.locals.id }, (err, session) => {
    if (err) {
      // res.redirect('/signup');
      return next('Error in sessionController.startSession: ' + JSON.stringify(err));
    }
    if (session) {
      // console.log('')
      return next();
    } else {
      return res.redirect('/signup');
    }
  });
};

module.exports = sessionController;
