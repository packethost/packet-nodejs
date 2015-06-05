var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var currentEnv = 'dev';
var expect = require('chai').expect;
var api = new Packet('');
var apiUrl;
describe('Client Events Methods', function() {
	beforeEach(function() {
		api.setEnvironment(currentEnv);
		apiUrl = apiConfig.apiEnvironments[currentEnv];
	});
	describe('getEvents', function() {
		it('should get a list of events', function(done) {
			var randomId_1 = uuid.v4();
			var randomId_2 = uuid.v4();
			var mock = nock(apiUrl)
			.intercept('/events/', 'GET')
			.reply(200, {
				events:[
					{href: apiUrl + '/events/'+ randomId_1},
					{href: apiUrl + '/events/'+ randomId_2}
				]});
			api.getEvents(false, false, function(err, data) {
				expect(data).to.deep.equal({events:[{href: apiUrl + '/events/'+ randomId_1}, {href: apiUrl + '/events/'+ randomId_2}]});
				done();
				mock.done();
			});
		});
	});
});