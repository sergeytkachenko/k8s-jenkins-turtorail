var http = require('http')

http.createServer((request, response) => {
	const userAgent = request.headers['user-agent'];
	response.writeHead(200, {"Content-Type": "application/json"});
	const now = new Date();
	const json = JSON.stringify({
		userAgent: userAgent,
		remoteAddress: request.connection.remoteAddress,
		now: now
	});
	response.end(json);
	console.log(`${JSON.stringify(now)}: response to client: ${json}`);
}).listen(8888);

console.log('server started on 8888 port');