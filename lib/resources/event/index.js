(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getEvents = function(id, parameters, callback) {
            var path = getEventsUrl(id);
            this._get(path, parameters, function(err, body) {
                callback(err, body);
            });
        };

        function getEventsUrl(id) {
            return '/events/' + (id || '');
        }
    };
})();
