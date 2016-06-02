(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getNotifications = function(id, parameters, callback) {
            var path = getNotificationsUrl(id);
            this._get(path, parameters, function(err, body) {
                callback(err, body);
            });
        };

        function getNotificationsUrl(id) {
            return '/notifications/' + (id || '');
        }
    };
})();
