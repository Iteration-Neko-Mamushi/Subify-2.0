const express = require('express');
const usersController = require('../controllers/usersController.js');
// const SubscriptionController = require('../controllers/usersController.js');

const router = express.Router();

//Credentials Table

//Users Table
router.post('/', usersController.createUser, (req, res) =>{
  return res.sendStatus(200);
});
//Subscription Table


module.exports = router;