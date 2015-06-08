var request = require('request');
var querystring = require('querystring');
var config = require('./config/config.json');

var Packet = function(apiKey) {
    this.apiKey = apiKey;
    this.currentEnvironment = config.apiEnvironments.prod;
};

module.exports = Packet;

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

Packet.prototype.getLocations = function(callback) {
    var path = getFacilitiesUrl();
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getOperatingSystems = function(callback) {
    var path = getOperatingSystemsUrl();
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getPlans = function(callback) {
    var path = getPlansUrl();
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getMembership = function(id, callback) {
    var path = getMembershipsUrl(id);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.updateMembership = function(id, membership, callback) {
    var path = getMembershipsUrl(id);
    this._patch(path, membership, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeMembership = function(id, callback) {
    var path = getMembershipsUrl(id);
    this._delete(path, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getInvitation = function(id, callback) {
    var path = getInvitationsUrl(id);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.acceptInvitation = function(id, callback) {
    var path = getInvitationsUrl(id);
    this._patch(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeInvitation = function(id, callback) {
    var path = getInvitationsUrl(id);
    this._delete(path, function(err, body) {
        callback(err, body);
    });
};

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

Packet.prototype.getUsers = function(id, callback) {
    var path = getUsersUrl(id);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.updateCurrentUser = function(user, callback) {
    var path = getProfileUrl();
    this._patch(path, user, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getEvents = function(id, parameters, callback) {
    var path = getEventsUrl(id);
    this._get(path, parameters, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getNotifications = function(id, parameters, callback) {
    var path = getNotificationsUrl(id);
    this._get(path, parameters, function(err, body) {
        callback(err, body);
    });
};

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

Packet.prototype._get = function(url, parameters, callback){
    var self = this;
    request(
        {
            method: 'GET',
            url: self.buildUrl(url),
            qs: parameters,
            headers: self.getAuthHeaders(),
            json:true
        }, function(err, res, body) {
            callback(handleRequestError(err,body), body || {});
        }
    );
};

Packet.prototype._post = function(url, postData, callback){
    var self = this;
    request(
        {
            method: 'POST',
            url: self.buildUrl(url),
            body: postData,
            headers: self.getAuthHeaders(),
            json:true
        }, function(err, res, body) {
            callback(handleRequestError(err,body), body || {});
        }
    );
};

Packet.prototype._patch = function(url, postData, callback){
    var self = this;
    request(
        {
            method: 'PATCH',
            url: self.buildUrl(url),
            body: postData,
            headers: self.getAuthHeaders(),
            json:true
        }, function(err, res, body) {
            callback(handleRequestError(err,body), body || {});
        }
    );
};

Packet.prototype._delete = function(url, callback){
    var self = this;
    request(
        {
            method: 'DELETE',
            url: self.buildUrl(url),
            headers: self.getAuthHeaders(),
            json:true
        }, function(err, res, body) {
            callback(handleRequestError(err,body), body || {});
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

Packet.prototype.setEnvironment = function(env) {
    this.currentEnvironment = config.apiEnvironments[env];
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

function getProjectsUrl(id, action) {
    if (id) {
        return 'projects/' + id + '/'  + (action || '');
    }
    return 'projects/';
}

function getDevicesUrl(projectId, id, action) {
    if (id) {
        return 'devices/' + (id + '/' || '') + (action || '');    
    }
    if (projectId) {
        return 'projects/' + projectId + '/devices/';
    }
    return false;
}

function getFacilitiesUrl(id) {
    return 'facilities/' + (id || '');
}

function getOperatingSystemsUrl(id) {
    return 'operating-systems/' + (id || '');
}

function getPlansUrl(id) {
    return 'plans/' + (id || '');
}

function getMembershipsUrl(id) {
    return 'memberships/' + (id || '');
}

function getInvitationsUrl(id) {
    return 'invitations/' + (id || '');
}

function getTransfersUrl(id) {
    return 'transfers/' + (id || '');
}

function getUsersUrl(id) {
    return 'users/' + (id || '');
}

function getProfileUrl(id) {
    return 'user/' + (id || '');
}

function getSshKeysUrl(id) {
    return 'ssh-keys/' + (id || '');
}

function getEventsUrl(id) {
    return 'events/' + (id || '');
}

function getNotificationsUrl(id) {
    return 'notifications/' + (id || '');
}

function getEmailsUrl(id) {
    return 'emails/' + (id || '');
}

function getApiKeysUrl(id) {
    return 'api-keys/' + (id || '');
}