(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getPlans = function(callback) {
            var path = getPlansUrl();
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        function getPlansUrl(id) {
            return '/plans/' + (id || '');
        }
    };
})();
