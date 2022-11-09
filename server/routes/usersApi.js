const express = require('express');
const usersController = require('../controllers/usersController.js');

const router = express.Router();

// Get all the subscriptions a user is signed up to
router.get('/', usersController.getUserSubInfo, (req, res) =>{
  return res.status(200).send(res.locals.subscriptionInfo);
});

// Create a new user and add them to the database
// Necessary data is passed in via req.body
router.post('/', usersController.createUser, usersController.createUserSubscriptions, (req, res) =>{
  return res.status(200).send(res.locals.user);
});

// Update the user's subscriptions adding a new sub
// Will pass in user's ID via the req.body
router.patch('/', usersController.updateUserSub, (req, res) =>{
  return res.sendStatus(200);
});

// Delete the subscription from the users account (not implemented by frontend)
// Will pass in user's ID via the req.body
router.delete('/', usersController.deleteUserSub, (req, res) =>{
  return res.sendStatus(200);
});

module.exports = router;