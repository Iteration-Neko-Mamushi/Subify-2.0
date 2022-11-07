const express = require('express');
const usersController = require('../controllers/usersController.js');
// const SubscriptionController = require('../controllers/usersController.js');

const router = express.Router();

//Credentials Table
router.post('/subinfo', usersController.getUserSubInfo, (req, res) =>{
  return res.status(200).send(res.locals.subscriptionInfo);
});

//Users Table
router.post('/', usersController.createUser, usersController.createUserSubscriptions, (req, res) =>{
  return res.status(200).send(res.locals.user);
});

router.patch('/', usersController.updateUserSub, (req, res) =>{
  return res.sendStatus(200);
});

router.delete('/', usersController.deleteUserSub, (req, res) =>{
  return res.sendStatus(200);
});


//Subscription Table
module.exports = router;