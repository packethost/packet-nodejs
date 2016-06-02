(function() {
    'use strict';

    module.exports = function(Packet) {
        Packet.prototype.getEmail = function(id, callback) {
            var path = getEmailsUrl(id);
            this._get(path, {}, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.addEmail = function(email, callback) {
            var path = getEmailsUrl();
            this._post(path, email, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.updateEmail = function(id, email, callback) {
            var path = getEmailsUrl(id);
            this._patch(path, email, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.removeEmail = function(id, callback) {
            var path = getEmailsUrl(id);
            this._delete(path, function(err, body) {
                callback(err, body);
            });
        };

        function getEmailsUrl(id) {
            return '/emails/' + (id || '');
        }
    };
})();
