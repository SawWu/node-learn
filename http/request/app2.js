const http = require('http');
const fs = require('fs');

let req = http.request({
  hostname: 'b203.photo.store.qq.com',
  path: '/psu?/8e48810a-135c-4dc1-9b79-10c5d1bd0e8d/ivwYipdzGcz*8Quw533fiF2h327JPirgO0bC0JBpmXI!/b/YbmmNnp3EAAAYiTmAHlqRAAA&a=205&b=203&bo=ngL3AQAAAAABE14!&rf=viewer_4&t=5'
}, (res) => {
  let arr = [];
  let str = ''

  res.on('data', buffer => {
    arr.push(buffer)
    str += buffer;
  });

  res.on('end', () => {
    let b = Buffer.concat(arr);

    fs.writeFile('123.jpg',b,()=>{
      console.log('成功了，抓取成功')
    })
  });
})

req.end();

