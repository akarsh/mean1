var fs = require('fs');
var data;
var someText = 'some file data';

/* Without flags */
// try {
// 	data = fs.writeFileSync(__dirname + '/1.txt', someText);
// } catch (error) {
// 	console.error(error.message);
// }

/* With flags */
try {
	data = fs.writeFileSync(__dirname + '/1.txt', someText, {
		flag: 'wx'
	});
} catch (error) {
	console.error(error.message);
}