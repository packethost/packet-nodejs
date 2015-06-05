var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var currentEnv = 'dev';
var expect = require('chai').expect;
var projectId;
var api = new Packet('');
describe('Client Projects Methods', function() {
	beforeEach(function() {
		api.setEnvironment(currentEnv);
		projectId = uuid.v4();
	});
	describe('getProjects', function() {
		it('should get a list of projects', function(done) {
			var mock = nock(apiConfig.apiEnvironments[currentEnv])
			.intercept('/projects/', 'GET')
			.reply(200, {projects:[{name:'project 1'}]});
			api.getProjects(false, false, function(err, data) {
				expect(data.projects).to.deep.equal([{name:'project 1'}]);
				done();
				mock.done();
			});
		});
		it('should get a single project', function(done) {
			var mock = nock(apiConfig.apiEnvironments[currentEnv])
			.intercept('/projects/' + projectId + '/', 'GET')
			.reply(200, {name:'project 1'});
			api.getProjects(projectId, false, function(err, data) {
				expect(data).to.deep.equal({name:'project 1'});
				done();
				mock.done();
			});
		});
	});
});