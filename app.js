var RtmClient = require('@slack/client').RtmClient;
var RTM_CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS.RTM;

var bot_token = 'xoxb-99909059781-xGpMAnE5bssQkoGCF7s8F4au';

var rtm = new RtmClient(bot_token);

var channel = "C2WPBT0MC"; //could also be a channel, group, DM, or user ID (C1234), or a username (@don) 
var WebClient = require('@slack/client').WebClient;

var token = 'xoxp-98800469685-99868939330-99929607462-5da9c63a408612ab34082cae8697d379'; //see section above on sensitive data

var web = new WebClient(token);


var usernames = [];

web.users.list(function(err, info) {
   if (err) {
       console.log('Error:', err);
   } else {
   		for( var i = 0; i < info.members.length; i++) {
   			usernames.push(info.members[i].name);
   		}
   }
});





// you need to wait for the client to fully connect before you can send messages
rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
	rtm.sendMessage("Yippie, bokade ett möte med Kund AB! Vem vill gå med mig?", channel);
	rtm.sendMessage(" /calendar 2016-12-12", channel);
	rtm.sendMessage("Following people are availiable for this meeting:", channel);

	var m = "";
	for( var i = 1; i <= usernames.length; i++) {
		m += i+". "+usernames[i-1] + "\n"
	}
	rtm.sendMessage(m, channel);
	rtm.sendMessage("Send me a message, whom you want to go with.", channel);

});


rtm.start();
