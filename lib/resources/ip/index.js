(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getIp = function(id, callback) {
            var path = getInvitationsUrl(id);
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.removeIp = function(id, callback) {
            var path = getInvitationsUrl(id);
            this._delete(path, function(err, body) {
                callback(err, body);
            });
        };

        function getInvitationsUrl(id) {
            return '/ips/' + (id || '');
        }
    };
})();
