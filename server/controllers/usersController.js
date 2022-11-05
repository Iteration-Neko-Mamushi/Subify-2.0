const db = require('../model/subifyModel');


const usersController = {};

usersController.createUser = (req, res, next) => {
  const queryString = 'Insert into username(account_date, first_name, last_name, location, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

  const createUserDetails = [
    req.body.account_date,
    req.body.first_name,
    req.body.last_name,
    req.body.location,
    req.body.email,
    req.body.phone_number
  ];
  db.query(queryString, createUserDetails, (err, result) =>{
    if(err) return next(err);
    return next();
  });

};

module.exports = usersController;