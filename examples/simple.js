
var Packet = require('../lib/packet'),
    config = require('./config');

var api = new Packet(config.apiKey);

api.getProjects(function(err, data){
    /*for(var i = 0; i < data.length; i++){
        console.log(data[i].name);
    }*/
});

api.addProject({name:'testing nodejs'}, function(err, data) {
	console.log(data);
});

api.deleteProject('82936f16-d78a-4978-a17f-56e745eb468e', function(err, res) {
	//this works, need to check response from request
});
