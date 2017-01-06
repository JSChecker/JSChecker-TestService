var fs = require("fs");
var mkdirp = require('mkdirp');
var cmd = require('node-cmd');
var node_ssh = require('node-ssh');

ssh = new node_ssh();


function CheckTask(files, test) {
    ssh.connect(
        {
            host: "localhost",
            username: "steel",
            privateKey: "C:\\temp\\key"
        }
    );

    var dir = "/home/steel/test/";
    mkdirp("C:/test/");
    for(var f in files)
    {
        fs.writeFile("C:/test/" + files[f].name, files[f].body);
    }

    for(var t in files)
    {
        fs.writeFile("C:/test/" + test[t].name, test[t].body);
    }
    ssh.putDirectory("C:/test", dir);

    ssh.execCommand("npm mocha", { cwd: dir },
        function(result){
        //Обрабатываем результат проверки
        console.log(result);
    });
}

module.exports.CheckTask = CheckTask;