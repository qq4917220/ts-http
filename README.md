Ts-http is an HTTP middleware that is encapsulated by typescript. It implements HTTP request data using GET and POST at the back end of node, unifies input parameters, and returns a Promise value, which can be invoked conveniently by async+await combination of ES6. I hope you like ~

ts-http是使用typescript封装的http中间件，实现在node后端使用GET及POST进行http请求数据，统一了输入参数，并且返回一个Promise的值，可使用ES6的async+await组合方便的进行调用。希望您喜欢~

## Install

`npm install ts-http --save`

## Usage

```ts

import http from "ts-http";

```

## Options

```ts

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
    }

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
    }
    
```

## Example

```ts

 console.log('A')
    let a = await http.request(getOpt);
    if (a.err!) {
        console.log('get出错:' + a.err)
        return;
    }
    console.log(a);
    console.log('B');
    let b = await http.request(postOpt);
    if (b.err!) {
        console.log('post出错:' + b.err)
        return;
    }
    console.log(b);

```    

## Result

```
-----------run-------------
A
{ data: '{"code":90000,"msg":"get错误返回","data":{"id":"1","name":"item"}}' }
B
{ data: '{"code":90000,"msg":"post错误返回","data":{"id":"2","name":"item"}}' }
此错误返回是因为带了参数err=1，所以证明运行是正确的。
-----------END run-------------

```



## Other

生成的JS文件在dist目录中，可使用JS调用，调用方式雷同，不再重复。

The generated JS file can be called in the dist directory using the JS call, and the call is identical and no longer repeats.

## Licences

[MIT]
