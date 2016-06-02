(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getLocations = function(callback) {
            var path = getFacilitiesUrl();
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        function getFacilitiesUrl(id) {
            return '/facilities/' + (id || '');
        }
    };
})();
