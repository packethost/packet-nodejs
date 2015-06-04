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

Packet.prototype.getProjects = function(callback, parameters, uuid) {
    var self = this;
    var path = 'projects/' + (uuid || '');
    this._get(path, parameters, function(err, body) {
            callback(err, body.projects);
        }
    });
};

Packet.prototype.addProject = function(project, callback) {
    var self = this;
    var path = 'projects/';
    this._post(path, project, function(err, body) {
        callback(err, body.projects);
    });
};

Packet.prototype.deleteProject = function(projectId, callback) {
    var self = this;
    if (!projectId) { return false }
    var path = 'projects/' + projectId;
    this._delete(path, function(err, body) {
            callback(err, body.projects);
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
    console.log(postData);
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

Packet.prototype._delete = function(url, callback){
    var self = this;
    request(
        {
            method: 'DELETE',
            url: self.buildUrl(url),
            headers: self.getAuthHeaders(),
            json:true
        }, function(err, res, body) {
            callback(handleRequestError(err,body), res.statusCode || {});
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
    if (!err && !!body.status && body.status !== 'OK') {
        return new Error(body.errors || body.error);
    } else {
        return null;
    }
}