const cookieController = {};

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.user._id, { maxAge: 9900000, httpOnly: true, sameSite: 'none', secure: true  });
  res.cookie('username', res.locals.user.firstName, { maxAge: 9900000, httpOnly: true, sameSite: 'none', secure: true });
  return next();
}

module.exports = cookieController;
