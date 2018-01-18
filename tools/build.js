const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

function scan(dir, isDel, index) {
    var files = [];

    if (!isDel) {
        isDel = false;
    }

    if (!index) {
        index = 0;
    }

    if (fs.existsSync(dir)) {
        var tempFiles = fs.readdirSync(dir);
        tempFiles.forEach(function (file, index) {
            var curDir = path.join(dir, file)
            if (fs.statSync(curDir).isDirectory()) {
                scan(curDir, isDel, index + 1);
            } else {
                if (isDel) {
                    fs.unlinkSync(curDir);
                    return;
                }

                files.push(curDir)
            }
        });

        if (isDel && index > 0) {
            fs.rmdirSync(dir);
        }
    };

    if (!isDel) {
        return files
    }
};

const root = path.join(__dirname, '..')

scan(path.join(root, 'dist'), true);
scan(path.join(root, 'types', 'dist'), true);

childProcess.exec("yarn tsc -p tsconfig.json -d --declarationDir types/dist", (error, stdout, stderr) => {
    if (error) {
        console.log(stdout);
        console.log(stderr);
    } else {
        var typesPath = path.join(root, 'types');
        var indexFile = path.join(typesPath, 'dist', 'index.d.ts');

        var content = '';
        var files = scan(typesPath);
        for (var i = 0; i < files.length; i++) {
            var f = files[i].replace(typesPath, '');
            content += '/// <reference path="..' + f + '" />\r\n';
        }

        content += fs.readFileSync(indexFile).toString();

        fs.writeFile(indexFile, content, (err) => {
            if (err) {
                console.log(`dist/index.d.ts 文件写入失败：${err.message}`)
            }
        })
    }
})
