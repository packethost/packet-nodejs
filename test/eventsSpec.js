'use strict';

var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var api = new Packet('');
var apiUrl;
describe('Client Events Methods', function() {
    beforeEach(function() {
        apiUrl = apiConfig.apiUrl;
    });
    describe('getEvents', function() {
        it('should get a list of events', function(done) {
            var randomId1 = uuid.v4();
            var randomId2 = uuid.v4();
            var mock = nock(apiUrl)
            .intercept('/events/', 'GET')
            .reply(200, {
                events:[
                    {href: apiUrl + '/events/' + randomId1},
                    {href: apiUrl + '/events/' + randomId2}
                ]
            });
            api.getEvents(false, false, function(err, data) {
                expect(err).to.equal(null);
                expect(data).to.deep.equal({events:[
                    {
                        href: apiUrl + '/events/' + randomId1
                    }, {
                        href: apiUrl + '/events/' + randomId2
                    }
                ]});
                done();
                mock.done();
            });
        });
    });
});
