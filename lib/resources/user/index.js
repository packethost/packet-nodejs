(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getUser = function(callback) {
            var path = getProfileUrl();
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.updateCurrentUser = function(user, callback) {
            var path = getProfileUrl();
            this._patch(path, user, function(err, body) {
                callback(err, body);
            });
        };

        function getProfileUrl(id) {
            return '/user/' + (id || '');
        }
    };
})();
