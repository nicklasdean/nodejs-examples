const http = require("http");

//write & end
http.createServer((req, res)=>{
    res.write("Hello Everyone");
    res.end();
}).listen(3000);