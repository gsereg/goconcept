
var basename = require('path').basename;
var debug = require('debug')('metalsmith-markdown');
var dirname = require('path').dirname;
var extname = require('path').extname;
var marked = require('marked');

/* suppres p render */
// marked.Renderer.prototype.paragraph = function(text) {
//   return text + '\n';
// };

// marked.setOptions({
//   renderer: new marked.Renderer()
// })


/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to convert markdown files.
 *
 * @param {Object} options (optional)
 *   @property {Array} keys
 * @return {Function}
 */

function plugin(options){
  options = options || {};
  var keys = options.keys || [];

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      debug('checking file: %s', file);
      if (!json(file)) return;
      
      var data = files[file];
      var dir = dirname(file);
      var html = basename(file, extname(file)) + '.html';
      if ('.' != dir) html = dir + '/' + html;

      debug('converting file: %s', file);
      var data = JSON.parse(data.contents.toString())
      if (!data.contents)
        data.contents = ""
      data.contents = new Buffer(data.contents)

     
      keys.forEach(function(key) {
        data[key] = parsed[key]
      });

      delete files[file];
      files[html] = data;
    });
  };
}

/**
 * Check if a `file` is markdown.
 *
 * @param {String} file
 * @return {Boolean}
 */

function json(file){
  return /\.json/.test(extname(file));
}