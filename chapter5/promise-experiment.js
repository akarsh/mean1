var fs = require('fs');

var promise = new Promise(function(resolve, reject) {
	fs.readFile('README.txt', 'utf8', function(error, data) {
		if(error) {
			return reject(error);
		}

		resolve(data);
	});
});

/* Chaining promises using then() method */
// promise.then(function(result) {
// 	console.log(result);
// 	return 'THE END!';
// }, function(error) {
// 	console.error(error.message);
// }).then(function(result) {
// 	console.log(result);
// })


/* The catch() method to display error in Promise chaining */
promise.then(function(result) {
	console.log(result);
}).catch(function(error) {
	console.error(error.message);
}).then(function() {
	console.log('THE END!');
})