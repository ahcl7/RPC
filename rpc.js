var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
	host: '192.168.1.43',
	port: 1234,
	user: 'ahcl',
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
