var Bleacon = require('bleacon');

var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535

Bleacon.startScanning([uuid], [major], [minor]);

Bleacon.on('discover', function(bleacon) {
    console.log("discovered "+bleacon);
});