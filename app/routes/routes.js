var express  = require('express'),
	  router 	 = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/', function(req, res) {
  // get header info and save to var
  var head = req.headers;
  // split user agent to get browser name and language
  var temp = head['user-agent'].split('(');
  var temp2 = temp[1].split(')');
  var os = temp2[0];
  temp = head['accept-language'].split(',');
  var language = temp[0];
  var ip = head['x-forwarded-for'];
  res.json(
    { 
      language: language,
      software: os, 
      ipaddress: ip
    }
  );	
});

module.exports = router;