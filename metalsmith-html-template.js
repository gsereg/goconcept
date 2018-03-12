
var basename = require('path').basename;
var debug = require('debug')('metalsmith-markdown');
var dirname = require('path').dirname;
var extname = require('path').extname;
var marked = require('marked');
var htmlTemplate = require('angular-template');
// var metadata = require('metalsmith-metadata')


htmlTemplate.pipes.markdown = function(options, value, fractionSize) {
  return marked(value)
}
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
  var dir = options.directory || 'layouts';


  return function(files, metalsmith, done){
    setImmediate(done);

    Object.keys(files).forEach(function(file) {
      
        // console.log(files[file] , "\r\n")
        // console.log("checking file ", file)
      debug('checking file: %s', file);
      // if (!json(file)) return;
      var data = files[file];
      


      if (!data.layout)
        return
      var template = metalsmith.path(dir, data.layout);
      // console.log("METADATA ", metalsmith.metadata().collections)
      // console.log("\r\n+++", data)
      
      console.log("\r\n---", metalsmith.metadata().collections)


      data.collections = metalsmith.metadata().collections
      
      // console.log("\r\n\r\ndata ", data)
      // if (data.collections)
      //   console.log("\r\n\r\collections ", data.collections)
      // else
      //   console.log("\r\n\r\c no ollections ", data)

      var res = htmlTemplate(template, data);

      data.contents = new Buffer(res)
      files[file] = data
      // var dir = dirname(file);
      // var html = basename(file, extname(file)) + '.html';
      // if ('.' != dir) html = dir + '/' + html;

      // debug('converting file: %s', file);
      // var data = JSON.parse(data.contents.toString())
      // if (!data.contents)
      //   data.contents = ""
      // data.contents = new Buffer(data.contents)

      // for (var x in data) {
      //   if (typeof(data[x]) == "string" && x != "layout") 
      //       data[x] = marked(data[x])
      // }

      // keys.forEach(function(key) {
      //   data[key] = parsed[key]
      // });

      // delete files[file];
      // files[html] = data;
    });
  };
}
