/**
 * Created by Ray on 2018-1-18
 */

import * as http from 'http'

export namespace httpModel {
    export interface request {
        method: string
        option: option
    }
    export interface method {
        method: string
    }
    export interface option {
        method?: string
        hostname: string
        port: string
        path?: string
        header?: any
        data?: any
    }
    export interface httpResult {
        err?: string
        data?: any
    }
}

export class Http {

    private static instance: Http

    /**
     * Instance 获取Logger单例
     */
    static get Instance() {
        return this.instance || (this.instance = new Http())
    }

    /**
     * 接口请求，GET方式
     * @param option
     */
    private get(option: httpModel.method) {
        option.method = 'GET';
        return exports.request(option);
    };

    /**
     * 接口请求，POST方式
     * @param option
     */
    private post(option: httpModel.method) {
        option.method = 'POST';
        return exports.request(option);
    };


    /**
     * 请求数据
     * @param httpData
     * @returns {string}
     */
    request(httpData: httpModel.request): Promise<httpModel.httpResult> {

        //将请求参数转化为字符串格式
        let option = httpData.option;
        option.method = httpData.method;
        if (option.method != "GET" && option.method != "POST") {
            Promise.resolve({
                err: 'method err!'
            })
        }
        let reqContent = '';
        if (typeof option.data != 'undefined') {
            reqContent = require('querystring').stringify(option.data);
            delete option.data;
        }
        if (option.method == 'GET' && reqContent != '') {
            //当GET且具备参数时，将请求参数附加到地址栏上
            option.path += '?' + reqContent;
        }

        // console.log(option)

        let dr = new Promise(function (resolve, reject) {
            let dm: httpModel.httpResult = {}
            let req = http.request(option, function (res: any) {
                let resContent = '';
                if (res.statusCode == 200) {
                    res.on('data', function (content1: any) {
                        resContent += content1;
                    }).on('end', function () {
                        dm.data! = resContent;
                        resolve(dm);
                    });
                } else {
                    dm.err! = '服务器错误：' + res.statusCode;
                    resolve(dm)
                }
            });
            req.on('error', function (e: any) {
                dm.err! = e.message;
                resolve(dm)
            });
            if (option.method == 'POST') {
                //当POST时使用req.write将参数写入
                try {
                    req.write(reqContent);
                } catch (e) {
                    dm.err! = e
                    resolve(dm)
                }
            }
            req.end();
        })
        return dr
    };
}

const i = Http.Instance
export default i;