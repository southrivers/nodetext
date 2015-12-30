function route(handle,pathname) {
	console.log("route is arrived !");
	if(typeof handle[pathname] == 'function') {
		handle[pathname]();
	} else {
		console.log("no such route !");
	}
}
exports.route = route;
