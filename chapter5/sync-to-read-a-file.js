var fs = require('fs');
var data;

/* Without character encoding, the contents of the file are returned in a Buffer */
// try {
// 	data = fs.readFileSync(__filename);
// 	console.log(data);
// } catch(error) {
// 	console.error(error.message);
// }

/* With character encoding utf8*/
try {
	data = fs.readFileSync(__filename, 'utf8');
	console.log(data);
} catch(error) {
	console.error(error.message);
}