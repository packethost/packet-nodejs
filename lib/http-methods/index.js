(function() {
    'use strict';
    module.exports = function(Packet) {
        var request = require('request');
        Packet.prototype._get = function(url, parameters, callback) {
            var self = this;
            request(
                {
                    method: 'GET',
                    url: self.buildUrl(url),
                    qs: parameters,
                    headers: self.getAuthHeaders(),
                    json:true
                }, function(err, res, body) {
                    callback(handleRequestError(err, body), body || {});
                }
            );
        };

        Packet.prototype._post = function(url, postData, callback) {
            var self = this;
            request(
                {
                    method: 'POST',
                    url: self.buildUrl(url),
                    body: postData,
                    headers: self.getAuthHeaders(),
                    json:true
                }, function(err, res, body) {
                    callback(handleRequestError(err, body), body || {});
                }
            );
        };

        Packet.prototype._patch = function(url, postData, callback) {
            var self = this;
            request(
                {
                    method: 'PATCH',
                    url: self.buildUrl(url),
                    body: postData,
                    headers: self.getAuthHeaders(),
                    json:true
                }, function(err, res, body) {
                    callback(handleRequestError(err, body), body || {});
                }
            );
        };

        Packet.prototype._delete = function(url, callback) {
            var self = this;
            request(
                {
                    method: 'DELETE',
                    url: self.buildUrl(url),
                    headers: self.getAuthHeaders(),
                    json:true
                }, function(err, res, body) {
                    callback(handleRequestError(err, body), body || {});
                }
            );
        };

        Packet.prototype.getAuthHeaders = function() {
            return {
                'X-Auth-Token': this.apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
        };

        Packet.prototype.buildUrl = function(url) {
            return this.currentEnvironment +  url;
        };

        Packet.prototype.setApiToken = function(token) {
            this.apiKey = token;
        };

        function handleRequestError(err, body) {

            if (body && (body.error || body.errors)) {
                return new Error(body.errors || body.error);
            } else {
                return err;
            }
        }
    };
})();
