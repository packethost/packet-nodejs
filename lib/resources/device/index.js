(function() {
    'use strict';
    module.exports = function(Packet) {
        Packet.prototype.getDevices = function(projectId, id, parameters, callback) {
            var path = getDevicesUrl(projectId, id);
            this._get(path, parameters, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.addDevice = function(id, device, callback) {
            var path = getDevicesUrl(id);
            this._post(path, device, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.updateDevice = function(id, device, callback) {
            var path = getDevicesUrl(false, id);
            this._patch(path, device, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.removeDevice = function(id, callback) {
            var path = getDevicesUrl(false, id);
            this._delete(path, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.deviceAction = function(id, action, callback) {
            var path = getDevicesUrl(false, id, 'actions');
            this._post(path, action, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.assignIp = function(id, ip, callback) {
            var path = getDevicesUrl(false, id, 'ips');
            this._post(path, ip, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.getDeviceTraffic = function(id, parameters, callback) {
            var path = getDevicesUrl(false, id, 'traffic');
            this._get(path, parameters, function(err, body) {
                callback(err, body);
            });
        };

        function getDevicesUrl(projectId, id, resource) {
            if (id) {
                return '/devices/' + (id + '/' || '') + (resource || '');
            }
            if (projectId) {
                return '/projects/' + projectId + '/devices/';
            }
            return false;
        }
    };
})();
