module.exports = players;

function players(cb) {
  return cb(null);
}

/*
// TODO: this script should just aggregate all data and coordinate
//       storage in Redis. Therefore player stuff should be moved
//       to lib/.
var Crawler = require('crawler').Crawler;

var c = new Crawler({
  callback: function handlePage(err, result, $) {
    // Retrieve all player data.
    // Array.prototype.filter.call($('a[href*="player"]'), function (el) { return /player\/[0-9]+\.html/.test(el.href); })
    //$('a').each(function () {
    //  console.log($(this).attr('href'));
    //});
    Array.prototype.filter.call($('a[href*="player"]'), function (el) {
      return /player\/[0-9]+\.html/.test(el.href);
    }).forEach(function (el) {
      console.log(el.innerHTML.trim());
    });
  }
});

// TODO: move this into the config file along with Redis config
var BASE = 'http://espncricinfo.com';

var urls = getPlayerScrapeURLs();
console.log(urls);
c.queue(urls);

function getPlayerScrapeURLs() {
  // 1. Player data - http://www.espncricinfo.com/ci/content/player/index.html
  var PLAYER_BASE = BASE + '/ci/content/player'

  // URLs take the form of $PLAYER_BASE/country.html?country=1;alpha=C where
  // country is numeric and alpha is A-Z for player surnames. These IDs are
  // the ones from the test playing nations (TODO: get dynamically)
  //var countries = [2, 25, 6, 5, 7, 3, 8, 4, 9, 1];
  var countries = [1];
  //var surnameLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var surnameLetters = 'A';
  var playerBaseURLs = [];

  countries.forEach(function (countryId) {
    Array.prototype.forEach.call(surnameLetters, function (letter) {
      playerBaseURLs.push(PLAYER_BASE + '/country.html?country=' + countryId + ';alpha=' + letter);
    });
  });

  return playerBaseURLs;
}
 */
