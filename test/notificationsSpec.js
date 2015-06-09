var nock = require('nock');
var Packet = new require('../lib/packet');
var uuid = require('node-uuid');
var apiConfig = require('../lib/config/config.json');
var expect = require('chai').expect;
var notificationId;
var api = new Packet('');
describe('Client Notification Methods', function() {
	describe('getNotifications', function() {
        it('should get a list of notifications', function(done) {
            var randomId_1 = uuid.v4();
            var randomId_2 = uuid.v4();
            var mock = nock(apiConfig.apiUrl)
            .intercept('/notifications/', 'GET')
            .reply(200, {
                notifications:[
                {id:randomId_1},
                {id:randomId_2}
                ]});
            api.getNotifications(false, false, function(err, data) {
                expect(data).to.deep.equal({notifications:[{id:randomId_1}, {id:randomId_2}]});
                mock.done();
                done();
            });
        });
    });
});