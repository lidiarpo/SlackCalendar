
var WebClient = require('@slack/client').WebClient;

var token = 'xoxp-98800469685-99868939330-99929607462-5da9c63a408612ab34082cae8697d379'; //see section above on sensitive data

var web = new WebClient(token);

web.users.list(function(err, info) {
   if (err) {
       console.log('Error:', err);
   } else {
   		console.log(info);
   }
});