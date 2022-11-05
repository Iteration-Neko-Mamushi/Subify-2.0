const db = require('../model/subifyModel');


const usersController = {};

usersController.createUser = (req, res, next) => {
  const queryString = 'Insert into username(username, password, account_date, first_name, last_name, location, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';

  const createUserDetails = [
    req.body.username,
    req.body.password,
    req.body.account_date,
    req.body.first_name,
    req.body.last_name,
    req.body.location,
    req.body.email,
    req.body.phone_number
  ];

  db.query(queryString, createUserDetails, (err, result) =>{
    if(err) return next(err);
    res.locals.username = req.body.username;
    return next();
  });

};

usersController.createUserSubscriptions = (req, res, next) => {
  const queryString = `CREATE TABLE ${res.locals.username}(
    subscription_name text,
    subscription_price text,
    due_date text
  );`;

  db.query(queryString)
    .then(result => {
      res.locals.user = result.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

usersController.updateUserSub = (req, res, next) => {
  const username = req.body.username;
  const body = [
    req.body.subscriptionName,
    req.body.subscriptionPrice,
    req.body.dueDate
  ];

  const queryString = `INSERT INTO ${username}(subscription_name, subscription_price, due_date) VALUES($1, $2, $3)`;

  db.query(queryString, body)
    .then(result => {
      res.locals.user = result.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

usersController.deleteUserSub = (req, res, next) => {
  const {username, subscriptionName} = req.body;

  const queryString = `DELETE FROM ${username} WHERE subscription_name = '${subscriptionName}';`;

  db.query(queryString)
    .then(result => {
      res.locals.user = result.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = usersController;