var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var currentEnv = 'dev';
var expect = require('chai').expect;
var api = new Packet('');
describe('Client Plans Methods', function() {
	beforeEach(function() {
		api.setEnvironment(currentEnv);
	});
	describe('getPlans', function() {
		it('should get a list of available services plans', function(done) {
			var mock = nock(apiConfig.apiEnvironments[currentEnv])
			.intercept('/plans/', 'GET')
			.reply(200, {
				plans:[
					{slug:'baremetal_1'},
					{slug:'baremetal_2'}
				]});
			api.getPlans(function(err, data) {
				expect(data).to.deep.equal({plans:[{slug:'baremetal_1'}, {slug:'baremetal_2'}]});
				done();
				mock.done();
			});
		});
	});
});