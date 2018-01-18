Weex-logger is a logging middleware that implements a console.log - like effect and facilitates display of interactive data in weex.

Import the access middleware, and invoke the start event, define the output variables, then you can use the add event to increase information in the current page and all sub pages. Each row information is separated and convenient to view.

Thanks to Zaaksam's technology sharing!

weex-logger是一个日志记录中间件,实现类似console.log的效果,方便在weex中显示交互数据。

导入访中间件,并调用start事件,定义好输出的变量，即可在当前页面及所有子页面中使用add事件增加信息，每行信息分开，方便查看。

感谢Zaaksam的技术分享!

## Install

`npm install weex-logger --save`

## Usage

```ts

import logger from "weex-logger";

```

## Options

- `start` 开始记录 start record
- `add` 增加记录 added record
- `content` 全部记录内容 all records
- `stop` 停止记录 stop record

## Example

```ts

    logger.add("no start<br/>");

    logger.start(content => {
      this.log = content;
    });
    logger.add("start1<br/>");
    logger.add("start2<br/>");

    let content = logger.content;
    logger.add("logger content:" + JSON.stringify(content));

    logger.stop();
    logger.add("stop1<br/>");
    logger.add("stop2<br/>");

    logger.start(content => {
      this.log = content;
    });
    logger.add("restart1<br/>");
    logger.add("restart2<br/>");

```    

## Result

```
-----------run-------------
start1
start2
logger content:"start1
\r\nstart2
" restart1
restart2
-----------END run-------------

```



## Other

生成的JS文件在dist目录中，可使用JS调用，调用方式雷同，不再重复。

The generated JS file can be called in the dist directory using the JS call, and the call is identical and no longer repeats.

## Licences

[MIT]
