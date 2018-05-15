"use strict";

var program = require("commander");
var Alphabet = require('alphabetjs');
var colors = require("colors");
var cliCommand = require("pagium2-command-cli");

var versionStr = require('./version.js');

module.exports = {
    run: function (argv) {
        program
            .version(Alphabet('PAGIUM2', 'stereo') + '\n v1.0.1')
            .option('-i, --init', 'init pagium development environment ')
            .parse(process.argv);

        if (program.init) {
            cliCommand.run();
        } else {
            console.log("no command!");
            process.exit(1);
        }
    }
}