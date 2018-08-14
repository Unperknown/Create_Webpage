var http = require('http');
var url = require('url');
var fs = require('fs');
//서버 오브젝트 만들기
http.createServer(function (req, res) {
  console.log(req.url);
  var qs = url.parse(req.url, true).query;
  console.log(qs.id);
  fs.readdir(`./Article`, function(error, files) {
    var list = '<ol>';
    for (var i = 0; i < files.length; i++) {
      list += `<li><a href="/?id=${files[i]}"> ${files[i]}</a></li>`;
    }
    list += '<ol>';
    fs.readFile(`./Article/${qs.id}`, 'utf8', function(error, data){
      var title = qs.id;
      var description = data;

      if (title === undefined) {
        title = 'Welcome!';
      }
      if (description === undefined) {
        description = 'Let\'s explore the kinds of Web Language.';
      }
      res.write(`
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Ethan's Website</title>
            <link rel="stylesheet" href="style.css">
            <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
            <script src="func.js"></script>
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <div class="grid">
              <div>
                ${list}
              </div>
              <div class="line">
                <input class="button" type="button" name="Button" value="Default" onclick="colorToggle();">
                <h2>${title}</h2>
                <!--jQuery를 사용하여 URL의 id 불러오기-->
                <p>${description}</p>
              </div>
            </div>
          </body>
        </html>`
      );
      console.log(data);
      //클라이언트에게 응답
      res.end(); //응답 종료
    });
  });
}).listen(8080); //서버 오브젝트가 포트 8080에 연결
