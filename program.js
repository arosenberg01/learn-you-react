var express = require('express');
var app = express();
var reactViews = require('express-react-views');
require('node-jsx').install();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', reactViews.createEngine());

app.use('/', function(req, res) {
  res.render('index-prototypes', '');
});

app.listen(app.get('port'), function() {});
