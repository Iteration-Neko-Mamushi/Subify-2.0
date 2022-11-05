const db = require('../model/subifyModel.js');

const subscriptionController = {};

subscriptionController.getCategory = (req, res, next) => {
  const category = req.params.category;
  const sqlQuery = `SELECT * FROM ${category}`;

  console.log('GET REQUEST:', category);
  db.query(sqlQuery)
    .then(result => {
      res.locals.category = result.rows[0];
      return next();
    })
    .catch(err => {
      return next(err);
    });
  return next;
};

module.exports = subscriptionController;