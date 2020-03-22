const servers = (app) => {
    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
        //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');
        next();
    });



    app.get('/hello', function(req, res) {
        console.log('--------------');
        console.log(req);
        console.log('--------------');
        res.send({ status: '200', msg: `hello:${req}` })
    })

    return app
}
module.exports = servers