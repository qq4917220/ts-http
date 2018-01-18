/**
 * Created by Ray on 2018-1-18
 */
import * as http from 'http';
var Http = /** @class */ (function () {
    function Http() {
    }
    Object.defineProperty(Http, "Instance", {
        /**
         * Instance 获取Logger单例
         */
        get: function () {
            return this.instance || (this.instance = new Http());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 接口请求，GET方式
     * @param option
     */
    Http.prototype.get = function (option) {
        option.method = 'GET';
        return exports.request(option);
    };
    ;
    /**
     * 接口请求，POST方式
     * @param option
     */
    Http.prototype.post = function (option) {
        option.method = 'POST';
        return exports.request(option);
    };
    ;
    /**
     * 请求数据
     * @param httpData
     * @returns {string}
     */
    Http.prototype.request = function (httpData) {
        //将请求参数转化为字符串格式
        var option = httpData.option;
        option.method = httpData.method;
        if (option.method != "GET" && option.method != "POST") {
            Promise.resolve({
                err: 'method err!'
            });
        }
        var reqContent = '';
        if (typeof option.data != 'undefined') {
            reqContent = require('querystring').stringify(option.data);
        }
        if (option.method == 'GET' && reqContent != '') {
            //当GET且具备参数时，将请求参数附加到地址栏上
            option.path += '?' + reqContent;
        }
        // console.log('--------httpData------------')
        // console.log(httpData)
        // console.log('--------option------------')
        // console.log(option)
        // console.log('--------------------')
        var dr = new Promise(function (resolve, reject) {
            var dm = {};
            var req = http.request(option, function (res) {
                var resContent = '';
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
            req.setTimeout(1000 * 5);
            // if (option.method == 'POST') {
            //     //当POST时使用req.write将参数写入
            //     try {
            //         req.write(reqContent);
            //     } catch (e) {
            //         dm.err! = e
            //         resolve(dm)
            //     }
            // }
            req.end();
        });
        return dr;
    };
    ;
    return Http;
}());
export { Http };
var i = Http.Instance;
export default i;
