var request = require('request');
var querystring = require('querystring');

//var API_URL = 'https://lab.packet.net:8443';
var API_URL = 'http://localhost:3000';

var API_ENVIRONMENTS = {
    dev: 'http://localhost:3000/',
    lab: 'https://lab.packet.net:8443/',
    prod: 'https://api.packet.net/'
}

var Packet = function(apiKey) {
    this.apiKey = apiKey;
    this.currentEnvironment = API_ENVIRONMENTS.dev;
    this.setEnvironment = setEnvironment;
};

module.exports = Packet;

Packet.prototype.getProjects = function(projectId, parameters, callback) {
    var self = this;
    var path = getProjectsUrl(projectId);
    this._get(path, parameters, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.addProject = function(project, callback) {
    var self = this;
    var path = getProjectsUrl();
    this._post(path, project, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.updateProject = function(projectId, project, callback) {
    var self = this;
    var path = getProjectsUrl(projectId);
    this._patch(path, project, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeProject = function(projectId, callback) {
    var self = this;
    var path = getProjectsUrl(projectId);
    this._delete(path, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.inviteToProject = function(projectId, invitation, callback) {
    var path = getProjectsUrl(projectId, 'invitations');
    this._post(path, invitation, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.transferProject = function(projectId, user, callback) {
    var path = getProjectsUrl(projectId, 'transfers');
    this._post(path, user, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getDevices = function(projectId, deviceId, parameters, callback) {
    var self = this;
    var path = getDevicesUrl(projectId, deviceId);
    this._get(path, parameters, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.addDevice = function(projectId, device, callback) {
    var self = this;
    var path = getDevicesUrl(projectId);
    this._post(path, device, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.updateDevice = function(deviceId, device, callback) {
    var self = this;
    var path = getDevicesUrl(false, deviceId);
    this._patch(path, device, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeDevice = function(deviceId, callback) {
    var self = this;
    var path = getDevicesUrl(false, deviceId);
    this._delete(path, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.deviceAction = function(deviceId, action, callback) {
    var self = this;
    var path = getDevicesUrl(false, deviceId, 'actions');
    this._post(path, action, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getLocations = function(callback) {
    var self = this;
    var path = getFacilitiesUrl();
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getOperatingSystems = function(callback) {
    var self = this;
    var path = getOperatingSystemsUrl();
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getPlans = function(callback) {
    var self = this;
    var path = getPlansUrl();
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getMembership = function(membershipId, callback) {
    var self = this;
    var path = getMembershipsUrl(membershipId);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.updateMembership = function(membershipId, membership, callback) {
    var self = this;
    var path = getMembershipsUrl(membershipId);
    this._patch(path, membership, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeMembership = function(membershipId, callback) {
    var self = this;
    var path = getMembershipsUrl(membershipId);
    this._delete(path, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getInvitation = function(invitationId, callback) {
    var self = this;
    var path = getInvitationsUrl(invitationId);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.acceptInvitation = function(invitationId, callback) {
    var self = this;
    var path = getInvitationsUrl(invitationId);
    this._patch(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeInvitation = function(invitationId, callback) {
    var self = this;
    var path = getInvitationsUrl(invitationId);
    this._delete(path, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getTransfer = function(transferId, callback) {
    var self = this;
    var path = getTransfersUrl(transferId);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.acceptTransfer = function(transferId, callback) {
    var self = this;
    var path = getTransfersUrl(transferId);
    this._patch(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeTransfer = function(transferId, callback) {
    var self = this;
    var path = getTransfersUrl(transferId);
    this._delete(path, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getUsers = function(userId, callback) {
    var self = this;
    var path = getUsersUrl(userId);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.updateCurrentUser = function(user, callback) {
    var self = this;
    var path = getProfileUrl();
    this._patch(path, user, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getEvents = function(eventId, parameters, callback) {
    var self = this;
    var path = getEventsUrl(eventId);
    this._get(path, parameters, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getNotifications = function(notificationId, parameters, callback) {
    var self = this;
    var path = getNotificationsUrl(notificationId);
    this._get(path, parameters, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getSshkeys = function(sshkeyId, callback) {
    var self = this;
    var path = getSshKeysUrl(sshkeyId);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.addSshkey = function(sshkey, callback) {
    var self = this;
    var path = getSshKeysUrl();
    this._post(path, sshkey, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.updateSshkey = function(sshkeyId, sshkey, callback) {
    var self = this;
    var path = getSshKeysUrl(sshkeyId);
    this._patch(path, sshkey, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeSshkey = function(sshkeyId, callback) {
    var self = this;
    var path = getSshKeysUrl(sshkeyId);
    this._delete(path, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.getEmail = function(emailId, callback) {
    var self = this;
    var path = getEmailsUrl(emailId);
    this._get(path, {}, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.addEmail = function(email, callback) {
    var self = this;
    var path = getEmailsUrl();
    this._post(path, email, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.updateEmail = function(emailId, email, callback) {
    var self = this;
    var path = getEmailsUrl(emailId);
    this._patch(path, email, function(err, body) {
        callback(err, body);
    });
};

Packet.prototype.removeEmail = function(emailId, callback) {
    var self = this;
    var path = getEmailsUrl(emailId);
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
}

Packet.prototype.buildUrl = function(url) {
    return this.currentEnvironment +  url;
};

function setEnvironment(env) {
    this.currentEnvironment = API_ENVIRONMENTS[env];
};

function handleRequestError(err, body) {
    if (body.error || body.errors) {
        return new Error(body.errors || body.error);
    } else {
        return null;
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