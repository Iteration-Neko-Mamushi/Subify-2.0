const express = require('express');
const subscriptionController = require('../controllers/subscriptionController.js');

const router = express.Router();

//Get all categories for a specific type
router.get('/type/:value', subscriptionController.getInformation, (req, res) => {
  return res.status(200).send(res.locals.information);
});

//Category Table

//Get the category specified in the body
router.get('/category/:value', subscriptionController.getInformation, (req, res) => {
  return res.status(200).send(res.locals.information);
});


module.exports = router;