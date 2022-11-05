//Credentials Table

//Users Table

//Subscription Table


/* `
SELECT username, password FROM credentials

WHERE username = $1 AND WHERE password = $2
`

AuthController.verifyUser = (req, res, next) => {

    const { user, pass } = req.body;// deconstruct req.body and extract user and pass

    const queryString = '';// construct a query string

    const params = [user, pass]; // store the values in an array called params

    db.query(querystring, params)// pass in the query string and params
        .then(result => {
            if(result.rows)
            if(user && pass) return next(); // check if user and pass exist in the database
        }).catch(err => next(err)); // if either the user or pass 
        // or we can <return res.send('Incorrect credentials!')>
        // or we can reroute to login page: 
};
 */