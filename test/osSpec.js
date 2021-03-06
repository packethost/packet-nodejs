'use strict';

var nock = require('nock');
var Packet = new require('../lib/packet');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var api = new Packet('');
describe('Client Operating Systems Methods', function() {
    describe('getOperatingSystems', function() {
        it('should get a list of operating systems', function(done) {
            var mock = nock(apiConfig.apiUrl)
            .intercept('/operating-systems/', 'GET')
            .reply(200, {
                oses:[
                {slug:'ubuntu_14_04'},
                {slug:'coreos_stable'}
                ]});
            api.getOperatingSystems(function(err, data) {
                expect(err).to.equal(null);
                expect(data).to.deep.equal({oses:[{slug:'ubuntu_14_04'}, {slug:'coreos_stable'}]});
                done();
                mock.done();
            });
        });
    });
});
