const express = require('express');
const AuthController = require('../controllers/authController.js');

const router = express.Router();

//Check the user login credentials and if valid then assign a cookie to them and sign-in
router.post('/', AuthController.verifyUser, AuthController.setCookie, (req, res) => {
  return res.status(200).send(res.locals.username);
});


module.exports = router;