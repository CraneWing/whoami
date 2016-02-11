var express 	= require('express'),
	bodyParser 	= require('body-parser'),
	indexRoutes = require('./app/routes/routes.js'),
	app 		= express();

require('dotenv').load();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(indexRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;

app.listen(port,  function () {
  console.log('Node.js started on port ' + port);
});