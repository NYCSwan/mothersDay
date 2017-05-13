const express = require('express');
const cors = require('cors');

const app = express();

const port = port.env.PORT || 3000;


app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static(__dirname + "./public"));

app.use(cors());

app.listen(port, function() {
  console.log("Express app running on port 3000");
});

module.exports = app;
