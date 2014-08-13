var http = require("http");
var _beer = require('./controllers/beers');

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});

	var url = req.url;
	var msg = '';

	switch(url){
		default:
			res.end('Rota não encontrada');
		break;

		case '/create':
			_beer.create(req,res);
		break;

		case '/retrieve':
			_beer.retrieve(req,res);
		break;

		case '/update':
			_beer.update(req,res);
		break;

		case '/remove':
			_beer.remove(res,res);
		break;
	}
	
}).listen(3000);
console.log('Server running at http://localhost:3000/');