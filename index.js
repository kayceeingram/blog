var Metalsmith  = require('metalsmith');
var assets = require('metalsmith-assets');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "Patience Pays",
    description: "Lessons Learned from Value Investing.",
    generator: "Metalsmith",
    url: "https://patiencepays.co/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(assets({
    source: './assets',
    destination: './assets'
  }))
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
