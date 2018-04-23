const fs = require('fs');
const path = require('path');
var ncp = require('ncp').ncp;

const src = './build';
const dest = '../docs';

fs.readdir(dest, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(dest, file), err => {
      if (err) throw err;
    });
  }
});

ncp(src, dest, function (err) {
 if (err) {
   if (err) throw err;
 }
 console.log('done!');
});