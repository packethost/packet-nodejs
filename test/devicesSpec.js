var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var currentEnv = 'dev';
var expect = require('chai').expect;
var projectId;
var deviceId;
var api = new Packet('');
describe('Client Devices Methods', function() {
	beforeEach(function() {
		api.setEnvironment(currentEnv);
	});
});