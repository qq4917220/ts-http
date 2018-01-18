"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const url = require("url");
let router = express.Router();
router.get('/get', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let name = 'get';
    let result;
    let querys = GetQuerys(req);
    let err = querys.err;
    let item = {
        id: "1",
        name: 'item'
    };
    if (err == '1') {
        result =
            {
                code: 90000,
                msg: name + "错误返回",
                data: item
            };
    }
    else {
        result =
            {
                code: 10000,
                msg: name + "正常返回",
                data: item
            };
    }
    res.json(result);
}));
router.post('/post', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let name = 'post';
    let result;
    let querys = GetQuerys(req);
    let err = querys.err;
    let item = {
        id: "2",
        name: 'item'
    };
    if (err == '1') {
        result =
            {
                code: 90000,
                msg: name + "错误返回",
                data: item
            };
    }
    else {
        result =
            {
                code: 10000,
                msg: name + "正常返回",
                data: item
            };
    }
    res.json(result);
}));
function GetQuerys(req) {
    var querys;
    querys = void 0;
    if (req.method.toString().toUpperCase() === "POST") {
        querys = req.body;
    }
    else {
        querys = url.parse(req.url, true).query;
    }
    return querys;
}
module.exports = router;
