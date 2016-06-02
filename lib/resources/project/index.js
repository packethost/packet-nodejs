(function() {
    'use strict';
    module.exports = function(Packet) {
        Packet.prototype.getProjects = function(id, parameters, callback) {
            var path = getProjectsUrl(id);
            this._get(path, parameters, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.addProject = function(project, callback) {
            var path = getProjectsUrl();
            this._post(path, project, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.updateProject = function(id, project, callback) {
            var path = getProjectsUrl(id);
            this._patch(path, project, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.removeProject = function(id, callback) {
            var path = getProjectsUrl(id);
            this._delete(path, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.inviteToProject = function(id, invitation, callback) {
            var path = getProjectsUrl(id, 'invitations');
            this._post(path, invitation, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.transferProject = function(id, user, callback) {
            var path = getProjectsUrl(id, 'transfers');
            this._post(path, user, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.getProjectIpReservations = function(id, parameters, callback) {
            var path = getProjectsUrl(id, 'ips');
            this._get(path, parameters, function(err, body) {
                callback(err, body);
            });
        };

        Packet.prototype.requestIp = function(id, parameters, callback) {
            var path = getProjectsUrl(id, 'ips');
            this._post(path, parameters, function(err, body) {
                callback(err, body);
            });
        };

        function getProjectsUrl(id, resource) {
            if (id) {
                return '/projects/' + id + '/'  + (resource || '');
            }
            return '/projects/';
        }
    };
})();
