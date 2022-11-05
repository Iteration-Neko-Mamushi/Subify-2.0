const express = require('express');
const subscriptionController = require('../controllers/subscriptionController.js');

const router = express.Router();

router.get('/', (req, res) => {
  return res.sendStatus(200);
});

//Category Table

//Get the category specified in the body
router.get('/:category', subscriptionController.getCategory, (req, res) => {
  return res.status(200).send(res.locals.category);
});


module.exports = router;