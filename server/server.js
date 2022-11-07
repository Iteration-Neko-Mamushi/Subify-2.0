const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const usersAPI = require('./routes/usersApi.js');
const subscriptionsAPI = require('./routes/subscriptionsApi.js');
const authenticationAPI = require('./routes/authenticationApi.js');

const PORT = 3000;
app.use(cookieParser());

//Handle parsing the request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route Handlers
app.use('/api/users', usersAPI);
app.use('/api/subscriptions', subscriptionsAPI);
app.use('/api/authenticate', authenticationAPI);

//Base App handler
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

//Catch-all route handler
app.use('*', (req, res) => {
  res.sendStatus(404);
});

//Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


module.exports = app;
