
var Packet = require('../lib/packet'),
    config = require('./config');

var api = new Packet(config.apiKey);

api.projects(function(err, data){
    for(var i = 0; i < data.length; i++){
        console.log(data[i].name);
    }
});
