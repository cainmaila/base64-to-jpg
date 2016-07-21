'use strict'

var execFile = require('child_process').execFile;
var mozjpeg = require('mozjpeg');
var Promise = require('promise');
var fs = require("fs");
var path = require('path');
var tmpimage = path.join(__dirname, 'tmp.png');
/**
 * base64Image字串 轉 jpg
 * @param  {String} base64ImageData image src中的字串
 * @param  {String} filename        路徑與檔名，需要以.jpg結尾
 * @return {Promise}                Promise
 */
function base64tpjpg(base64ImageData, filename) {
    var promise = new Promise(function(resolve, reject) {
        var base64Data = base64ImageData.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(base64Data, 'base64');
        fs.writeFile(tmpimage, dataBuffer, function(err) {
            if (err) {
                reject(err);
            } else {
                execFile(mozjpeg, ['-outfile', filename, tmpimage], function(err) {
                    if (err) {
                        reject(err);
                    } else {
                        fs.unlink(tmpimage, function(err) {
                            resolve(filename);
                        });
                    }
                });
            }
        });
    });
    return promise;
}

module.exports = base64tpjpg;
