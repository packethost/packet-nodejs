var api = new require('../lib/packet');
var nock = require('nock');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var currentEnv = 'dev';
var projectId;
describe('Packet Client', function() {
	beforeEach(function() {
		api.prototype.setEnvironment(currentEnv);
	});
	describe('Projects Methods', function() {
		beforeEach(function() {
			projectId = uuid.v4();
		});
		describe('getProjects', function() {
			it('path should be /projects', function(done) {
				var mock = nock(apiConfig.apiEnvironments[currentEnv])
				.get('/projects')
				.reply(404, {});
				api.prototype.getProjects(projectId, false, function(err, data) {
					console.log('hola');
					console.log(data);
					done();
				});
			});	
		});
	});
});