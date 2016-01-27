var Bleacon = require('bleacon');

// var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
// var uuid = 'b9407f30f5f8466eaff925556b57fe6d';
// var uuid = '794949d7e96b412d9b08ed812d264745';
var uuid = '001583d1c4de';
var major = 1; // 0 - 65535
var minor = 2; // 0 - 65535

Bleacon.startScanning([uuid], [major], [minor]);

Bleacon.on('discover', function(bleacon) {
    console.log("discovered "+bleacon);
});

// var Sound = require('node-aplay');
 
// // fire and forget: 
// // new Sound('./sample.wav').play();
 
// // with ability to pause/resume: 
// var music = new Sound('./sample.wav');
// music.play();
 
// setTimeout(function () {
// 	music.pause(); // pause the music after five seconds 
// }, 5000);
 
// setTimeout(function () {
// 	music.resume(); // and resume it two seconds after pausing 
// }, 7000);
 
// // you can also listen for various callbacks: 
// music.on('complete' , function () {
// 	console.log('Done with playback!');
// });