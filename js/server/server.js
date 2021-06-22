const http = require('http');
const fs = require('fs').promises;

http.createServer(async(req,res) => {
    try{
        const data = await fs.readFile('./jserver.html');
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.end(data);
    }catch(err)
    {
        console.error(err);
        res.writeHead(500,{'Content-Type':'text/html; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8099,() => {
        console.log('await 8081 port');
    })