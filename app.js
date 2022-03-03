// Import all external modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize express middleware 
const app = express();

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  // passing controller to next route handler
  next();
});

// Add body-parser 
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

// Add all roues here
// Added below test route
app.get('/', function (req, res) {
  res.send("App Working.....");
});

// user route
app.use('/user', require('./routes/user-route'));

//Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT);

console.log('server is running at port : ' + PORT)
