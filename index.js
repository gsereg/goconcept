var Metalsmith  = require('metalsmith')
var markdown    = require('metalsmith-markdown')
var layouts     = require('metalsmith-layouts')
var permalinks  = require('metalsmith-permalinks')
var asset       = require('metalsmith-static')
var collections       = require('metalsmith-collections')
var json = require('./metalsmith-from-json.js')
var angular = require('./metalsmith-html-template.js')
var debug = require('metalsmith-debug');
var metadata = require('metalsmith-metadata')


Metalsmith(__dirname)
  .metadata({
    title: "Goconcept",
  })
  .source('./src')
  .use(json())
  .use(collections({
    progetti: {
      pattern: "progetti/*",
      refer: false
    },
    brands: {
      pattern: "brands/*",
      refer: false
    }
  }))
  .destination('./dist')
  .clean(true)
  // .use(metadata())
  .use(debug())
  .use(angular({
    directory : "./src"
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
