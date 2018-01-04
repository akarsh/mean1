var fs = require('fs');
var data = 'some file data';

/* Using writeFile() method */
// fs.writeFile(__dirname + '/foo.txt', data, function(error) {
// 	if (error) {
// 		return console.error(error.message);
// 	}
// });

/* Using writeFile() method with flags */
fs.writeFile(__dirname + '/foo.txt', data, {
	flag: 'wx'
}, function(error) {
	if (error) {
		return console.error(error.message);
	}
});