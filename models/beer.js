var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-cuiaba');

var db = mongoose.connection;
db.on('error', function(err){
	console.log('Erro de conexao.', err)
});
db.once('open', function () {
	console.log('Conexão aberta.')
});

var Schema = mongoose.Schema;

var BeerSchema = new Schema({
	name: { type: String, default: '', required: true},
	description: { type: String, default: '' },
	alcohol: { type: Number, min: 0},
	price: { type: Number, default: ''},
	category: { type: String, default: ''},
	created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Beer', BeerSchema);