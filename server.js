var http=require("http");
var server=http.createServer(function(req,res){
console.log("req.url" +req.url , " Request method: " +req.method);
res.write("<h1>hii i am anu<h1>");
});
server.listen(9125);
console.log("server is listen on portal 9125");