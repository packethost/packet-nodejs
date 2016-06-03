(function() {
    'use strict';

    var config = require('./config/config.json');
    var Packet = function(apiKey) {
        this.apiKey = apiKey;
        this.currentEnvironment = config.apiUrl;
    };
    require('./resources')(Packet);
    module.exports = Packet;
})();
