var fs = require("fs");
var mkdirp = require('mkdirp');
var cmd = require('node-cmd');


function CheckTask(files, test) {
    //запускаем test для solution
    //надо типо куда-то, как-то сохранить, а потом просто консолькой вызвать тесты
    mkdirp("test/");
    for(var f in files)
    {
        fs.writeFile("test/" + files[f].name, files[f].body);
    }

    for(var t in files)
    {
        fs.writeFile("test/" + test[t].name, test[t].body);
    }
    cmd.run("cd test");
    cmd.get("npm init", function (data) {
        console.log(data);
    });
}

module.exports.CheckTask = CheckTask;