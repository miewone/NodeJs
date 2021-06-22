const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster)
{
    console.log(`>>> master process id : ${process.pid}`);

    for(let i =0; i < numCPUs;i+=1)
    {
        cluster.fork();
    }

    cluster.on('exit',(worker,code,signal) => {
        console.log(`${worker.process.pid} worker is shutdown.`);
        console.log('code',code,'signal',signal);
    });

} else
{
    http.createServer(( req,res) => {
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.write('<h1>hello node </h1>');
        res.end('<p>bye~</p>');
    })
        .listen(9910);

    console.log(`${process.pid} workders execute`);
}

