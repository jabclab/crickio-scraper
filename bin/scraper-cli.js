#!/usr/bin/env node
require('../lib/scraper.js')(function handleAppExit(err) {
  if (err) {
    console.error(err.stack);

    return process.exit(1);
  }

  return process.exit(0);
});
