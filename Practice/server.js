var http = require('http');
var url = require('url');
var fs = require('fs');
//create a server object:
http.createServer(function (req, res) {
  console.log(req.url);
  var qs = url.parse(req.url, true).query;
  console.log(qs.id);
  fs.readFile(`./Data/${qs.id}.html`, 'utf8', function(error, data){
    res.write(`
      <!DOCTYPE html>
      <html lang="en" dir="ltr">
        <head>
          <meta charset="utf-8">
          <title>Ethan's Website</title>
          <link rel="stylesheet" href="style.css">
          <script>
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"
          </script>
        </head>
        <body>
          <script src="tmp.js"></script>
          <h1><a href="/?id=WEB">WEB</a></h1>
          <div class="grid">
            <div>
              <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
                <li><a href="/?id=Node_js">Node_js</a></li>
              </ol>
            </div>
            <div class="line">
              <input class="button" type="button" name="Button" value="Default" onclick="colorToggle();">
              <input class="luck" type="button" value="Show" onclick="showLuckyNum();">
              <h2>${qs.id}</h2>
              <!--jQuery를 사용하여 URL의 id 불러오기-->
              <p>${data}</p>
            </div>
          </div>
        </body>
      </html>`);
    console.log(data);
    //write a response to the client
    res.end(); //end the response
  });
}).listen(8080); //the server object listens on port 8080:1337/');
