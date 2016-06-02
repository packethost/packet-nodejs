(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getMembership = function(id, callback) {
            var path = getMembershipsUrl(id);
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.updateMembership = function(id, membership, callback) {
            var path = getMembershipsUrl(id);
            this._patch(path, membership, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.removeMembership = function(id, callback) {
            var path = getMembershipsUrl(id);
            this._delete(path, function(err, body) {
                callback(err, body);
            });
        };

        function getMembershipsUrl(id) {
            return '/memberships/' + (id || '');
        }
    };
})();
