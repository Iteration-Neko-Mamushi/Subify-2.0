const db = require('../model/subifyModel');


const usersController = {};

// Get and return all subscription info from the user's subscription database
usersController.getUserSubInfo = (req, res, next) => {
  const username = req.cookies.token;
  const queryString = `SELECT * FROM ${username}`;

  db.query(queryString)
    .then(results => {
      res.locals.subscriptionInfo = results.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

// Create a new user and add them to the username database
usersController.createUser = (req, res, next) => {
  const queryString = 'Insert into username(username, password, account_date, first_name, last_name, location, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';

  const createUserDetails = [
    req.body.username,
    req.body.password,
    new Date(),
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

// Create the table needed to manage their subscriptions
usersController.createUserSubscriptions = (req, res, next) => {
  const queryString = `CREATE TABLE ${res.locals.username}(
    subscription_name text,
    subscription_price text,
    due_date text,
    category text
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

// Add a new subscription to the signed in users account database
usersController.updateUserSub = (req, res, next) => {
  const username = req.cookies.token;
  
  const body = [
    req.body.subscription_name,
    req.body.monthly_price,
    req.body.due_date,
    req.body.category
  ];

  const queryString = `INSERT INTO ${username}(subscription_name, subscription_price, due_date, category) VALUES($1, $2, $3, $4);`;

  db.query(queryString, body)
    .then(result => {
      res.locals.user = result.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

// Delete a subscription from the signed in users account database (not used by frontend at this time)
usersController.deleteUserSub = (req, res, next) => {
  const username = req.cookies.token;
  const subscriptionName = req.body.subscriptionName;

  const queryString = `DELETE FROM ${username} WHERE subscription_name = '${subscriptionName}';`;
  console.log(queryString);

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