var express  = require('express'),
	router 	 = express.Router();

router.get('/', function(req, res) {
  // get header info and save to var
  var head = req.headers;
  // split user agent to get browswer name and language
  var temp = head['user-agent'].split('(');
  var browser = temp[0];
  var temp2 = temp[1].split(')');
  var os = temp2[0];
  temp = head['accept-language'].split(',');
  var language = temp[0];
  var ip = head['x-forwarded-for'];
  res.render('index', { language: language,
                        os: os, 
                        ip: ip,
                        browser: browser 
              });	
});

module.exports = router;