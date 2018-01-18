import * as express from 'express'
import * as url from 'url'

let router = express.Router()

//api返回测试
router.get('/get', async (req: any, res: any) => {
    let name = 'get'
    let result: any
    let querys: any = GetQuerys(req)
    let err: string = querys.err
    let item = {
        id: "1",
        name: 'item'
    }
    if (err == '1') {
        result =
            {
                code: 90000,
                msg: name + "错误返回",
                data: item
            }
    } else {
        result =
            {
                code: 10000,
                msg: name + "正常返回",
                data: item
            }
    }
    res.json(result)
})

router.use('/post', async (req: any, res: any) => {
    let name = 'post'
    let result: any
    let querys: any = GetQuerys(req)
    let err: string = querys.err
    let item = {
        id: "2",
        name: 'item'
    }
    if (err == '1') {
        result =
            {
                code: 90000,
                msg: name + "错误返回",
                data: item
            }
    } else {
        result =
            {
                code: 10000,
                msg: name + "正常返回",
                data: item
            }
    }
    res.json(result)
})


function GetQuerys(req: any) {
    var querys;
    querys = void 0;
    if (req.method.toString().toUpperCase() === "POST") {
        querys = req.body;
    } else {
        querys = url.parse(req.url, true).query;
    }
    return querys;
}


export = router