    /**
     * 1. 最简单的Promise例子：生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败：
     */

    /**
     * test()函数有两个参数，这两个参数都是函数
     * @param resolve 执行成功,调用回调函数 resolve
     * @param reject 执行失败,调用回调函数 reject
     */
//    function test(resolve1, reject1) {
//        console.log('start new Promise...');
//        var timeOut = Math.random() * 2;
//        console.log('set timeout to: ' + timeOut + ' seconds.');
//        setTimeout(function () {
//            if (timeOut < 1) {
//                console.log('call resolve()...');
//                resolve1('200 OK');
//            }
//            else {
//                console.log('call reject()...');
//                reject1('timeout in ' + timeOut + ' seconds.');
//            }
//        }, timeOut * 1000);
//    }
//
//    var p1 = new Promise(test);
//    /* p1 执行 test 成功及失败后返回的值仍然是一个 Promise */
//    var p2 = p1.then(function (result) {
//        console.console.log('成功：' + result);
//    });
//    var p3 = p2.catch(function (reason) {
//        console.console.log('失败：' + reason);
//    });


    /**
     * 2. Promise 还可以串行执行异步任务,不需要写一层一层的嵌套代码。
     */
    // 0.5秒后返回input*input的计算结果:
    function multiply(input) {
        return new Promise(function (resolve, reject) {
            console.log('calculating ' + input + ' x ' + input + '...');
            setTimeout(resolve, 500, input * input);
        });
    }

    // 0.5秒后返回input+input的计算结果:
    function add(input) {
        return new Promise(function (resolve, reject) {
            console.log('calculating ' + input + ' + ' + input + '...');
            setTimeout(resolve, 500, input + input);
        });
    }

    var p = new Promise(function (resolve, reject) {
        console.log('start new Promise...');
        resolve(123);
    });

    p.then(multiply)
            .then(add)
            .then(multiply)
            .then(add)
            .then(function (result) {
                console.log('Got value: ' + result);
            });