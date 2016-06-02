(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getOperatingSystems = function(callback) {
            var path = getOperatingSystemsUrl();
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        function getOperatingSystemsUrl(id) {
            return '/operating-systems/' + (id || '');
        }
    };
})();
