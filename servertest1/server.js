var http = require("http");
var url = require("url");



function start(route) {
	function onrequest(req,res) {

		var pathname = url.parse(req.url).pathname;
		console.log("request for   "+pathname+"   received");

		route(pathname);
		
		res.writeHead(200,["Content-Type","text/plain"]);
		res.write("hello world");
		res.end();
	}
	http.createServer(onrequest).listen(11000);
	console.log("server is start !")
};


exports.start = start;

