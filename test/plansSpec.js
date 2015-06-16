'use strict';

var nock = require('nock');
var Packet = new require('../lib/packet');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var api = new Packet('');
describe('Client Plans Methods', function() {
    describe('getPlans', function() {
        it('should get a list of available services plans', function(done) {
            var mock = nock(apiConfig.apiUrl)
            .intercept('/plans/', 'GET')
            .reply(200, {
                plans:[
                {slug:'baremetal_1'},
                {slug:'baremetal_2'}
                ]});
            api.getPlans(function(err, data) {
                expect(err).to.equal(null);
                expect(data).to.deep.equal({plans:[{slug:'baremetal_1'}, {slug:'baremetal_2'}]});
                done();
                mock.done();
            });
        });
    });
});
