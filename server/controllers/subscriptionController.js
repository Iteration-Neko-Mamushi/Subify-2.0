const db = require('../model/subifyModel.js');

const subscriptionController = {};

subscriptionController.getInformation = (req, res, next) => {
  const paramVal = req.params.value;
  const sqlQuery = `SELECT * FROM ${paramVal}`;

  console.log('GET REQUEST:', paramVal);
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