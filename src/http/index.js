"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class Http {
    static get Instance() {
        return this.instance || (this.instance = new Http());
    }
    get(option) {
        option.method = 'GET';
        return exports.request(option);
    }
    ;
    post(option) {
        option.method = 'POST';
        return exports.request(option);
    }
    ;
    request(httpData) {
        let option = httpData.option;
        option.method = httpData.method;
        if (option.method != "GET" && option.method != "POST") {
            Promise.resolve({
                err: 'method err!'
            });
        }
        let reqContent = '';
        if (typeof option.data != 'undefined') {
            reqContent = require('querystring').stringify(option.data);
        }
        if (option.method == 'GET' && reqContent != '') {
            option.path += '?' + reqContent;
        }
        let dr = new Promise(function (resolve, reject) {
            let dm = {};
            let req = http.request(option, function (res) {
                let resContent = '';
                if (res.statusCode == 200) {
                    res.on('data', function (content1) {
                        resContent += content1;
                    }).on('end', function () {
                        dm.data = resContent;
                        resolve(dm);
                    });
                }
                else {
                    dm.err = '服务器错误：' + res.statusCode;
                    resolve(dm);
                }
            });
            req.on('error', function (e) {
                dm.err = e.message;
                resolve(dm);
            });
            if (option.method == 'POST') {
                try {
                    req.write(reqContent);
                }
                catch (e) {
                    dm.err = e;
                    resolve(dm);
                }
            }
            req.end();
        });
        return dr;
    }
    ;
}
exports.Http = Http;
const i = Http.Instance;
exports.default = i;
