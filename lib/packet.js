var request = require('request');
var querystring = require('querystring');

var API_URL = 'https://lab.packet.net:8443';
//var API_URL = 'http://localhost:3000';

var Packet = function(apiKey) {
    this.apiKey = apiKey;
};

module.exports = Packet;

Packet.prototype.projects = function(callback) {
    this._get('projects/', {}, function(error, body) {
        callback(error, body.projects);
    });
};

Packet.prototype._get = function(url, parameters, callback){
    this._request('GET', url, parameters, callback);
};

Packet.prototype._request = function(method, url, parameters, callback) {
    var headers = { 
        'X-Auth-Token': this.apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    var getURL = API_URL + '/' + url

    request({
        method: method,
        url: getURL,
        qs: parameters,
        headers: headers,
        json:true
    }, function(error, response, body) {
        if (!error && !!body.status && body.status !== 'OK') {
            error = new Error(body.description || body.error_message);
        }
        callback(error, body || {});
    });
};
