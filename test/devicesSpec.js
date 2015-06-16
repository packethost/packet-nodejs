'use strict';

var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var projectId;
var deviceId;
var api = new Packet('');
describe('Client Devices Methods', function() {
    beforeEach(function() {
        projectId = uuid.v4();
        deviceId = uuid.v4();
    });
    describe('getDevices', function() {
        it('should get a list of devices', function(done) {
            var mock = nock(apiConfig.apiUrl)
            .intercept('/projects/' + projectId + '/devices/', 'GET')
            .reply(200, {devices:[{name:'device 1'}]});
            api.getDevices(projectId, false, false, function(err, data) {
                expect(err).to.equal(null);
                expect(data.devices).to.deep.equal([{name:'device 1'}]);
                done();
                mock.done();
            });
        });
        it('should get a single device', function(done) {
            var mock = nock(apiConfig.apiUrl)
            .intercept('/devices/' + deviceId + '/', 'GET')
            .reply(200, {name:'device 1'});
            api.getDevices(false, deviceId, false, function(err, data) {
                expect(err).to.equal(null);
                expect(data).to.deep.equal({name:'device 1'});
                done();
                mock.done();
            });
        });
    });
});
