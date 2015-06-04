
var Packet = require('../lib/packet'),
    config = require('./config');

var api = new Packet(config.apiKey);
/*
api.getProjects(false, false, function(err, data){
    /*for(var i = 0; i < data.length; i++){
        console.log(data[i].name);
    }
});
/*
api.addProject({name:'testing nodejs'}, function(err, data) {
	console.log(data);
});

api.removeProject('82936f16-d78a-4978-a17f-56e745eb468e', function(err, res) {
//	console.log(err);
	//this works, need to check response from request
});
*/
/*
api.updateProject('3f80939e-8fc5-4937-b593-7257b697f6df', {name:'my new updated project'}, function(err, res) {
	console.log(res);
});
*/