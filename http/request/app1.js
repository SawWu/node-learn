const http = require('http');

http.createServer((req,res)=>{
  console.log(http)
  res.write('<h1>hello Node</h1>');
  res.end();
}).listen(9000);


