import * as http from '../src/http'
(async function () {

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
    }

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
    }

    console.log('A')
    let h = await http.default.request(postOpt);
    if (h.err!) {
        console.log('出错:' + h.err)
        return;
    }
    console.log(h);
    console.log('B');

})()