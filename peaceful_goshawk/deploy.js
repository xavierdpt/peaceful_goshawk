const fs = require('fs');
const path = require('path');
var ncp = require('ncp').ncp;
var rimraf = require('rimraf');

const src = './build';
const dest = '../docs';

rimraf(dest, function () { console.log('dest cleared'); });

ncp(src, dest, function (err) {
 if (err) {
   if (err) throw err;
 }
 console.log('build ready');
});