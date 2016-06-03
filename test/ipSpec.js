'use strict';

var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var id;
var api = new Packet('');
describe('Client IP Methods', function() {
    beforeEach(function() {
        id = uuid.v4();
    });
    describe('getIPs', function() {
        it('should get a single IP/Reservation', function(done) {
            var mock = nock(apiConfig.apiUrl)
            .intercept('/ips/' + id, 'GET')
            .reply(200, {});
            api.getIp(id, function(err, data) {
                expect(err).to.equal(null);
                expect(data).to.deep.equal({});
                done();
                mock.done();
            });
        });
    });
});
