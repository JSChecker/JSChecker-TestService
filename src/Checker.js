var SSH = require('simple-ssh');


function CheckTask(files, test) {
    var dir = "/home/pi/test/";

    var ssh = new SSH(
        {
            host: "192.168.1.106",
            user: "pi",
            pass: "12345678",
            baseDir: dir
        }
    );

    console.log("Запись");
    for(var f in files)
    {
        ssh.exec("cat > " + dir + files[f].name, { in: files[f].body}).start();
    }

    for(var t in test)
    {
        ssh.exec("cat > " + dir + "test/" + test[t].name, { in: test[t].body}).start();
    }

    console.log("Запускаем тесты");
    ssh.exec("npm test", {
        exit: function (code, output, errput) {
            console.log("OUT:");
            console.log(output);

            console.log("ERR:");
            console.log(errput);
        }
    })
        .start();

}

module.exports.CheckTask = CheckTask;