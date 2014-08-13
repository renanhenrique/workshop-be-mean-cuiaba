var Beer = require('../models/beer');
var _beer = {
	create: function(req,res){
		var dados = {
			name: 'Budweiser',
			description: 'Até q vai',
			alcohol: 5.0,
			price: 3.5,
			category: 'lager'	
		}
		var model = new Beer(dados);
		model.save(function (err, data) {
			if (err){
				console.log('Erro: ', err);
				msg = err;
			}else{
				console.log('Cerveja Inserida', data);
				msg = data;
			}
			res.end(msg);
		});
	},

	retrieve: function(req,res){
		Beer.find(function (err, data) {
			if(err){
				console.log(err);
				msg = err;
			}else{
				console.log(data)
				msg = data;
			}
			res.end(msg);
		})
	},

	update: function(req,res){
		var query = {name: 'Budweiser'};
		var mod = {alcohol: 50};

		Beer.update(query, mod, function (err, data) {
			if (err){
				console.log('Erro: ', err);
				msg = err;
			}else{
				console.log('Cerveja atualizada com sucesso', data);    
				msg = data;
			}
			res.end(msg);
		});		
	},

	remove: function(req,res){
		var query = {name: 'Budweiser'};

		Beer.remove(query, function (err, data) {
			if (err){
				console.log('Erro: ', err);
				msg = err;
			}else{
				console.log('Cerveja deletada com sucesso', data);
				msg = data;
			}
			res.end(msg);
		});		
	}
};

module.exports = _beer;