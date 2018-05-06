var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
	host: 'localhost',
	port: 8334,
	user: 'asdf',
	pass: 'ahcl123'
});


client.getDifficulty(function(err, difficulty) {
	if(err) {
		return console.error(err);
	}
	console.log('Difficulty: ' + difficulty);
});
//console.log(client);


//client.getConnections(function(err, result) {
//	if (err) {
//		return console.error(err);
//	}
//	console.log("connections: " + result);
//});
