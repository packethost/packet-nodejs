(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getSshkeys = function(id, callback) {
            var path = getSshKeysUrl(id);
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.addSshkey = function(sshkey, callback) {
            var path = getSshKeysUrl();
            this._post(path, sshkey, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.updateSshkey = function(id, sshkey, callback) {
            var path = getSshKeysUrl(id);
            this._patch(path, sshkey, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.removeSshkey = function(id, callback) {
            var path = getSshKeysUrl(id);
            this._delete(path, function(err, body) {
                callback(err, body);
            });
        };

        function getSshKeysUrl(id) {
            return '/ssh-keys/' + (id || '');
        }
    };
})();
