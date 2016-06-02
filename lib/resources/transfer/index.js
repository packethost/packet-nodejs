(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getTransfer = function(id, callback) {
            var path = getTransfersUrl(id);
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.acceptTransfer = function(id, callback) {
            var path = getTransfersUrl(id);
            this._patch(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.removeTransfer = function(id, callback) {
            var path = getTransfersUrl(id);
            this._delete(path, function(err, body) {
                callback(err, body);
            });
        };

        function getTransfersUrl(id) {
            return '/transfers/' + (id || '');
        }
    };
})();
