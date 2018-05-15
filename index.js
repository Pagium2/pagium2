"use strict";

var program = require("commander");
var Alphabet = require('alphabetjs');
var colors = require("colors");

var versionStr = require('./version.js');

module.exports = {
    run: function (argv) {
        program
            .version(Alphabet('PAGIUM2', 'stereo') + '\n v0.0.1')
            .option('-i, --init', 'init pagium development environment ')
            .parse(process.argv);

        if (program.init) {
            console.log('now we are init!');
        } else {
            console.log("no command!");
            process.exit(1);
        }
    }
}