const express = require('express');
const AuthController = require('../controllers/authController.js');

const router = express.Router();


router.post('/', AuthController.verifyUser, AuthController.setCookie, (req, res) => {
  return res.status(200).send(res.locals.username);
});


module.exports = router;