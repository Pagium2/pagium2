"use strict";

var program = require("commander");
var Alphabet = require('alphabetjs');
var colors = require("colors");

var versionStr = require('./version.js');

module.exports = {
    run:function(argv){
        program.parse(process.argv);
        program
        .version(Alphabet('PAGIUM2','stereo')+'\n v0.0.1')
        .option('-i, --init', 'init pagium development environment ')
        .option('-r, --release', 'packing pagium program ')
        .option('-o, --optimize', 'pagium program optimize')
        .option('-s, --server', 'running pagium server ')
        .option('-w, --watch', 'watch pagium server ')
        .option('-l, --live', 'live reload pagium program ');

        program.on('--help', function () {
            console.log('  Examples:');
            console.log('');
            console.log('    $ pagium --help');
            console.log('    $ pagium -h');
            console.log('');
        });
        if (program.version) {
            console.log (versionStr()+'\n Pagium2 - v0.0.1')
        }else {
            console.log("no command!");
            process.exit(1);
        }
    }
}