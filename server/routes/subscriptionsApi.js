const express = require('express');
const subscriptionController = require('../controllers/subscriptionController.js');

const router = express.Router();

//Get all categories for a specific type (Implemented but not used by frontend | missing feature: when sub is added add to this database)
router.get('/type/:value', subscriptionController.getInformation, (req, res) => {
  return res.status(200).send(res.locals.information);
});

//Get the category specified in the body (Implemented but not used by frontend | missing feature: when sub is added add to this database)
router.get('/category/:value', subscriptionController.getInformation, (req, res) => {
  return res.status(200).send(res.locals.information);
});


module.exports = router;