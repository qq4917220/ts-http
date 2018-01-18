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
const http = require("../src/server");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(http);
        return;
        let getOpt = {
            method: "GET",
            option: {
                hostname: "develop.yingsheng.com",
                port: '8011',
                path: '/ajax/api/item',
                data: {
                    err: 90000
                }
            }
        };
        let postOpt = {
            method: 'POST',
            option: {
                hostname: 'develop.yingsheng.com',
                port: '8011',
                path: '/ajax/api/item',
                data: {
                    test: 100,
                    err: 90000
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        };
        console.log('A');
        let h = yield http.request(postOpt);
        if (h.err) {
            console.log('出错:' + h.err);
            return;
        }
        console.log(h);
        console.log('B');
    });
})();
