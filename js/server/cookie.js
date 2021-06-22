const http = require('http');

http.createServer((req,res) => {
    console.log('>>> 요청응답 : ',req.url , req.headers.cookie);

    res.writeHead(200, { 'Set-Cookie':'mycookie=test'});
    res.end('hello cookie');
})
    .listen(8091, () => {
        console.log('server wait...');
    })