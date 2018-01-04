var fs = require('fs');

/* Without character encoding, the contents of the file are returned in a Buffer */
// fs.readFile(__filename, function(error, data) {
// 	if(error) {
// 		return console.error(error.message);
// 	}

// 	console.log(data);
// });

/* With character encoding utf8*/
// fs.readFile(__filename, 'utf8', function(error, data) {
// 	if(error) {
// 		return console.error(error.message);
// 	}

// 	console.log(data);
// });

/* Another way to include character encoding utf8 */
// fs.readFile(__filename, {
// 	encoding: 'utf8'
// }, function(error, data) {
// 	if(error) {
// 		return console.error(error.message);
// 	}

// 	console.log(data);
// });

/* Calling toString() method to return Buffer content as UTF-8 encoding string */
fs.readFile(__filename, function(error, data) {
	if(error) {
		return console.error(error.message);
	}

	console.log(data.toString());
});