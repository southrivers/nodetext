var http = require("http");

var url = require("url");

function start(route,handle) {
	function onreq(req,res) {
		var pathname = url.parse(req.url).pathname;
		console.log("pathname  "+pathname);

		route(handle,pathname);

		res.writeHead(200,["Content-Type","text/plain"]);
		res.write("hello h3c !");
		res.end();
	}

	http.createServer(onreq).listen(11000);
	console.log("server is start !");
}

exports.start = start;
