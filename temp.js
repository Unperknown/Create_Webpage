var fs = require('fs');
//File System 요구하여 반환 값을 fs 객체에 저장
fs.readFile('./Data/WEB.html', 'utf8', function(error, data){
  console.log(data);
});
