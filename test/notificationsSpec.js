'use strict';
// jshint ignore: start
var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var api = new Packet('');
describe('Client Notification Methods', function() {
    describe('getNotifications', function() {
        it('should get a list of notifications', function(done) {
            var randomId1 = uuid.v4();
            var randomId2 = uuid.v4();
            var mock = nock(apiConfig.apiUrl)
            .intercept('/notifications/', 'GET')
            .reply(200, {
                notifications:[
                {id:randomId1},
                {id:randomId2}
            ]});
            api.getNotifications(false, false, function(err, data) {
                expect(err).to.equal(null);
                expect(data).to.deep.equal({notifications:[
                    {id:randomId1},
                    {id:randomId2}
                ]});
                mock.done();
                done();
            });
        });
    });
});
