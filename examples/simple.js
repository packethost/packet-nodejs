
var Packet = require('../lib/packet'),
    config = require('./config');

var api = new Packet(config.apiKey);

/*projects examples
api.getProjects(false, false, function(err, data){
});
api.addProject({name:'testing nodejs'}, function(err, data) {
});
api.removeProject('82936f16-d78a-4978-a17f-56e745eb468e', function(err, res) {
});
api.updateProject('3f80939e-8fc5-4937-b593-7257b697f6df', {name:'my new updated project'}, function(err, res) {
});
api.inviteToProject('cc9cf7d7-a71d-4dde-b1ab-df72a538445f', invitation, function(err, res){
});
api.removeMembership('ce29f02f-2f0d-4ceb-a439-2700f84aae7a', function(err, res){
	console.log(res); //Last test made
});
*/