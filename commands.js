var fs = require('fs');

module.exports = {

	pwd: function(arguments){
	  	process.stdout.write(process.env.PWD)
	  	process.stdout.write('\nprompt > ');
	},

	date: function(arguments){
	  	process.stdout.write(Date())
	  	process.stdout.write('\nprompt > ');
	},
	ls: function(arguments){
		fs.readdir('.', function(err, files) {
 			if (err) throw err;
  				files.forEach(function(file) {
    			process.stdout.write(file.toString() + "\n");
  			})
  			process.stdout.write("prompt > ");
		});
	}, 

	echo: function(arguments){
		process.stdout.write(arguments + "\n");
		process.stdout.write("prompt > ");
	}, 

	cat: function(arguments){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}
    		process.stdout.write(files.toString() + "\n");
    		process.stdout.write("prompt > ");
  		})
	},

	head: function(arguments){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");

 			
 			for(var i=0; i < 5; i++){
 				process.stdout.write(test[i] + "\n");
 			}	
 			//process.stdout.write(test);
    		//process.stdout.write(files.toString() + "\n");
    		process.stdout.write("prompt > ");

  		})
	},

	tail: function(arguments){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");

 			for(var i=test.length-5; i < test.length; i++){
 				process.stdout.write(test[i] + "\n");
 			}	
 			process.stdout.write("prompt > ");
 			

  		})
	},

	sort: function(arguments){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");
 			var sortedArray = test.sort().join("\n");
 		
 			process.stdout.write(sortedArray);
 
  		})
	},

	wc: function(arguments){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");
 			var length = test.length.toString();
 			
 			process.stdout.write(length + "\n");
 			process.stdout.write("prompt > ");
 
  		})
	},

	uniq: function(arguments){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");
 			var newArray =[];
 			
 			for (var i =0; i < test.length; i++){
 				if(test[i] !== test[i+1]){
 					newArray.push(test[i]);
 				}
 			}
 			process.stdout.write(newArray.join("\n"));
 			process.stdout.write("prompt > ");
 
  		})
	},


}


//can do this too:
// exports.pwd =  function(){
// 	  	process.stdout.write(process.env.PWD)
// 	  	process.stdout.write('\nprompt > ');
// 	}

// exports.date = function(){
// 	  	process.stdout.write(Date())
// 	  	process.stdout.write('\nprompt > ');
// 	}

