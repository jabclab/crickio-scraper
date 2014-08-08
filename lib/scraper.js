var fs = require('fs');
var path = require('path');
var async = require('async');

var config = require('../config');

module.exports = scraper;

function scraper(cb) {
  getRetrievers(function (err, retrievers) {
    if (err) {
      return cb(err);
    }

    async.each(Object.keys(retrievers), function retrieveAndStore(name, cb_) {
      retrievers[name](function (err, data) {
        if (err) {
          return cb_(err);
        }

        return storeData(data, cb_);
      });
    }, cb);
  });
}

function getRetrievers(cb) {
  fs.readdir(__dirname, function dirReadHandler(err, files) {
    if (err) {
      return cb(err);
    }

    var selfFilename = path.basename(__filename);
    var retrievers = {};
    
    files.filter(function (file) {
      return file !== selfFilename;
    }).forEach(function (file) {
      Object.defineProperty(
        retrievers,
        file.replace(/\.js$/, ''),
        {
          get: function () {
            return function () {
              var cmd = require('./' + file);
              var args = Array.prototype.slice.call(arguments, 0);

              cmd.apply(cmd, args);
            };
          },
          enumerable: true
        }
      );
    });

    return cb(null, retrievers);
  });
}

function storeData(data, cb) {
  // TODO: store data in Redis
  return cb();
}
