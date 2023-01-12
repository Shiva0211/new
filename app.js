//console.log(result);
//console.log(module); 
//result();
//var a=['a','b','c'];
//var b=['d','e','f'];
//var c=[...a,...b];
//console.log(c);
//const EventEmitter=require('events');
//const Logger=require('./log');//to load modules
//const logger=new Logger();//creating object for Logger class
//logger.on('messageLogged',function(arg)
//{
    //console.log('Listener called !',arg);
//});
//logger.log('message');
const http=require('http');
const server=http.createServer((req,res)=>
{
    if(req.url=='/')
    {
        res.write('Hello folks !');
        res.end();
    }
}
);//type localhost 3000 in browser to check connection
//server.on('connection',(socket)=>
//{
  //  console.log('New connection...');
//});
server.listen(3000);
console.log('Listening on port 3000.....');