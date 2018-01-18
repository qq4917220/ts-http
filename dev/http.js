"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../src/http");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        let getOpt = {
            method: "GET",
            option: {
                hostname: "192.168.0.126",
                port: '8080',
                path: '/api/get',
                data: {
                    err: 1
                },
                __timeout: 5
            }
        };
        let postOpt = {
            method: 'POST',
            option: {
                hostname: '192.168.0.126',
                port: '8080',
                path: '/api/post',
                data: {
                    test: 100,
                    err: 1
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                __timeout: 5
            }
        };
        console.log('A');
        let a = yield http_1.default.request(getOpt);
        if (a.err) {
            console.log('get出错:' + a.err);
            return;
        }
        console.log(a);
        console.log('B');
        let b = yield http_1.default.request(postOpt);
        if (b.err) {
            console.log('post出错:' + b.err);
            return;
        }
        console.log(b);
    });
})();
