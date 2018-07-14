var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Ethan's Website</title>
        <link rel="stylesheet" href="style.css">
        <script
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous">
        </script>
      </head>
      <body>
        <script src="tmp.js"></script>
        <h1><a href="home.html">WEB</a></h1>
        <div class="grid">
          <div>
            <ol>
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
              <li><a href="4.html">Node.js</a></li>
            </ol>
          </div>
          <div class="line">
            <input class="button" type="button" name="Button" value="Default"
            onclick="colorToggle();">
            <h2>WEB</h2>
            <p> The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991. </p>
          </p>
          </div>
        </div>
      </body>
    </html>
  `); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080:1337/');
