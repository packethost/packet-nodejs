var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var api = new Packet('');
describe('Client Facilities Methods', function() {
	beforeEach(function() {
	});
	describe('getLocations', function() {
		it('should get a list of facilities', function(done) {
            var mock = nock(apiConfig.apiUrl)
            .intercept('/facilities/', 'GET')
            .reply(200, {
                facilities:[
                {name:'facility 1'},
                {name:'facility 2'}
            ]});
            api.getLocations(function(err, data) {
                expect(data).to.deep.equal({facilities:[{name:'facility 1'}, {name:'facility 2'}]});
                done();
                mock.done();
            });
        });
    });
});