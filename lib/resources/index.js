(function() {
    'use strict';
    module.exports = function(Packet) {
        require('../http-methods')(Packet);
        require('./device')(Packet);
        require('./email')(Packet);
        require('./event')(Packet);
        require('./invitation')(Packet);
        require('./ip')(Packet);
        require('./location')(Packet);
        require('./membership')(Packet);
        require('./notification')(Packet);
        require('./operating-system')(Packet);
        require('./plan')(Packet);
        require('./project')(Packet);
        require('./ssh-key')(Packet);
        require('./transfer')(Packet);
        require('./user')(Packet);
    };
})();
