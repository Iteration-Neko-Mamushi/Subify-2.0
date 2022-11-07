const db = require('../model/subifyModel.js');

const subscriptionController = {};

//Get information from either an indivual subscription or category (THIS IS NOT COMPLETE FRONTEND ENDED UP NOT NEEDING THIS REQUEST)
subscriptionController.getInformation = (req, res, next) => {
  //Get the value from the params passed into the browser
  const paramVal = req.params.value;
  const sqlQuery = `SELECT * FROM ${paramVal}`;

  db.query(sqlQuery)
    .then(result => {
      res.locals.information = result.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
  return next;
};

/*  */
module.exports = subscriptionController;