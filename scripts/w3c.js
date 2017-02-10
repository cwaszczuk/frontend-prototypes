const fs = require('fs');
const readDir = require('readdir');
const valimate = require('valimate');


// create an array of all file type in a dreictory
function getFiles(){
	const arr = [];
	const files = readDir.readSync('./_public', ['**.html']);
	for (var i = 0; i < files.length; i++) {
    arr.push('http://localhost:3000/_public/' + files[i]);
  }
	return arr;
}

const config = {
	urls: getFiles()
};

valimate.validate(config).then(isInvalid => process.exit(~~isInvalid))

// @TODO: add reporter
// @TODO: review alternatives
