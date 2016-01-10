var sleep = require('sleep');
var gpio = require("gpio");
var intervalTimer;
buzzer = gpio.export(17, {
   // When you export a pin, the default direction is out. This allows you to set 
   // the pin value to either LOW or HIGH (3.3V) from your program. 
   direction: 'out',
 
   // set the time interval (ms) between each read when watching for value changes 
   // note: this is default to 100, setting value too low will cause high CPU usage 
   interval: 200,
 
   // Due to the asynchronous nature of exporting a header, you may not be able to 
   // read or write to the header right away. Place your logic in this ready 
   // function to guarantee everything will get fired properly 
   ready: function() {
      intervalTimer = setInterval(function() {
         buzzer.set();
         console.log("buzzing!!!");
         setTimeout(function() { 
            console.log("silent");
            buzzer.reset(); 

         }, 500);
      }, 1000);
   }
});


// reset the headers and unexport after 10 seconds 
setTimeout(function() {
   clearInterval(intervalTimer);          // stops the voltage cycling 
   buzzer.removeAllListeners('change');   // unbinds change event 
   buzzer.reset();                        // sets header to low 
   buzzer.unexport(function() {
      console.log("exit");
      // unexport takes a callback which gets fired as soon as unexporting is done 
      process.exit(); // exits your node program 
   });
}, 10000)