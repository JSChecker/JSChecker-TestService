var checker = require("./Checker");
var file = require("./models/File");

var main = new file.File("index.js", "" +
    "function Power(a, b){return a*b;}\n" +
    "module.exports.Power = Power;");

var test = new file.File("test.js","empty");

checker.CheckTask([main], [test]);