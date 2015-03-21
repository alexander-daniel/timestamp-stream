'use strict';

var through = require('through2');

function TimeStampStream (opts) {
    if (!opts) opts = {};

    var sep = opts.sep || '\n';
    var timeStamper = opts.timeStamper || Date;

    function transformer (chunk, enc, callback) {
        /*jshint validthis:true */
        var data = {
            x: timeStamper(),
            y: JSON.parse(chunk)
        };

        this.push(JSON.stringify(data)+ sep);

        callback(null, sep);
    }

    return through(transformer);
}

module.exports = TimeStampStream;
