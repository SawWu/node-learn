const fs = require('fs');
const url = require('url')

const GetUrl= (sUrl,success) => {
  let urlObj = url.parse(sUrl);
  let http ='';
  if(urlObj.protocol == 'http:'){
    http = require('http');
  }
  else{
    http = require('https');
  }

  let req = http.request({
    'hostname':urlObj.hostname,
    'path':urlObj.path
  },res=>{
    console.log(res)
    let arr = [];
    res.on('data',buffer=>{
      arr.push(buffer);
    });
    res.on('end',()=>{
      let b = Buffer.concat(arr);
      success && success(b);
    })

  });
  req.end();
  req.on('error',()=>{
    console.log('404了，哥们');
  })
}

GetUrl('http://www.clevaly.com/liyou/images/1.jpg',data=>{
  fs.writeFile('123.jpg',data);
})
