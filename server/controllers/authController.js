const db = require('../model/subifyModel'); // connect to Model file

const AuthController = {};

AuthController.verifyUser = (req, res, next) => {

  const { user, pass } = req.body;// deconstruct req.body and extract user and pass
  const queryString = 'SELECT username, password FROM credentials WHERE username = $1 AND WHERE password = $2;';// construct a query string
  const params = [user, pass]; // store the values in an array called params

  db.query(queryString, params)// pass in the query string and params
    .then(result => {
      if(result.rows) return next(); // check if user and pass exist in the database
    }).catch(err => next(err)); // if either the user or pass 
// or we can <return res.send('Incorrect credentials!')>
// or we can reroute to login page: 
};


AuthController.setCookie = (req, res, next) => {
    res.cookie('token', /* '<user || admin>' */);
    return next();
};


AuthController.verifyCookie = (req, res, next) => {

const { token } = req.cookies;
const queryString = 'SELECT token FROM <what table?> WHERE token = $1;'
const params = [token];

db.query(queryString, params)// pass in the query string and params
    .then(result => {
        if(result[0] === /* '<user || admin>' */) {
            // can console.log something
            // reroute to member page
            return next();
        }
}).catch(err => next(err)); 

};

module.exports = AuthController;

/* module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}; */