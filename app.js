const express = require('express');
const cors = require('cors');
const routes = require('./routes/');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3000));

// app.use(express.static(path.join(__dirname + "./public")));
app.use(express.static('public'));
app.use(cors());
app.use(routes);

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.get('/', function(req, res){
  res.render('index', function(err, html) {
    if(err) {
      console.error(err);
    } else {
      console.log(html);
      res.send(html);
    }
  });
});

app.listen(app.get('port'), function() {
  console.log("Express app running on port ", app.get('port'));
});

module.exports = app;
