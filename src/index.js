var checker = require("./Checker");
var file = require("./models/File");

var main = new file.File("index.js", "" +
    "function Power(a, b){return a*b;}\n" +
    "module.exports.Power = Power;");

var test = new file.File("test.js",
    "const assert = require('assert');" +
    "const solution  = require('./../index');" +
"describe('test', function() {" +
    "it('should be 4', function() {" +
        "assert.equal(4, solution.Power(2, 2));" +
    "});" +
 "});");

checker.CheckTask([main], [test]);