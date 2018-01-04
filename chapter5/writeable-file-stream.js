var fs = require('fs');
var readStream = fs.createReadStream('foo.txt');
var writeStream = fs.createWriteStream('bar.txt');

/* pipe() method allows the output of one stream to be connected to input of another stream */
readStream.pipe(writeStream);