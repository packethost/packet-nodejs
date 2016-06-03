(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getInvitation = function(id, callback) {
            var path = getInvitationsUrl(id);
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.acceptInvitation = function(id, callback) {
            var path = getInvitationsUrl(id);
            this._patch(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.removeInvitation = function(id, callback) {
            var path = getInvitationsUrl(id);
            this._delete(path, function(err, body) {
                callback(err, body);
            });
        };

        function getInvitationsUrl(id) {
            return '/invitations/' + (id || '');
        }
    };
})();
