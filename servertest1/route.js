var res = require("./requestHandlers");
function route(pathname) {
	console.log("路由请求的路径是： "+pathname);
	if(pathname == "/start") {
		res.start();
	}
	else{
		console.log("hehe!");
	}
}
exports.route = route;
