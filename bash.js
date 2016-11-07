var commands = require('./commands.js');


// Output a prompt
process.stdout.write('prompt >');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().slice(0, data.indexOf(" ")); // remove the newline
  var args = data.toString().slice(data.indexOf(" ")).trim();
  
  if(commands[cmd]){
	  commands[cmd](args, done);
  }
  else{
  	process.stdout.write('You typed: ' + cmd);
  	process.stdout.write('\nprompt > ');
   }
   

});


// can have this here or in command.js
var done = function(output){
	process.stdout.write(output + "\n");
	process.stdout.write("prompt > ");
}