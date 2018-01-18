import http from '../src/http'
(async function () {

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

})()