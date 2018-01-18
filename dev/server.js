"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const app = express();
const root = __dirname;
const api = require("./api")
// const st = path.join(root, '..', '..', 'dist');

function getIPAdress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};

var ip = getIPAdress();
app.use('/api', api);
app.listen(8080, ip, () => {
    var pkg = require('../package.json')
    console.log('--------------------------------------------------------')
    console.log('【Version】 ' + pkg.version)
    console.log('【BaseUrl】 http://' + ip + ':8080/')
    console.log('--------------------------------------------------------')
});