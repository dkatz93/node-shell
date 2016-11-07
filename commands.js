var fs = require('fs');
var request = require('request');

module.exports = {

	pwd: function(arguments, done){
	  	done(process.env.PWD);
	},

	date: function(arguments, done){
	  	done(Date)
	},
	ls: function(arguments, done){
		var newstr = ''
		fs.readdir('.', function(err, files) {
 			if (err) throw err;
  			files.forEach(function(file) {
    			newstr += file.toString() + "\n"
  			})
  			done(newstr);
  			// done(file.toString() + "\n")
		});
	}, 

	echo: function(arguments, done){
		done(arguments);
	}, 

	cat: function(arguments, done){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}
    		done(files.toString());
  		})
	},

	head: function(arguments, done){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");
 			var newstr = '';
 			for(var i=0; i < 5; i++){
 				newstr += test[i] + "\n";
 			}	
    		done(newstr);

  		})
	},

	tail: function(arguments, done){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");
 			var newstr = '';

 			for(var i=test.length-5; i < test.length; i++){
 				newstr += test[i] + "\n";
 			}	
 			done(newstr);
 			

  		})
	},

	sort: function(arguments, done){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");
 			var sortedArray = test.sort().join("\n");
 		
 			done(sortedArray);
 
  		})
	},

	wc: function(arguments, done){
		fs.readFile('./'+ arguments, function(err, files) {
 			if (err){ 
 				throw err;
 			}

 			var test = files.toString().split("\n");
 			var length = test.length.toString();
 			
 			done(length);
 
  		})
	},

	uniq: function(arguments, done){
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
 			done(newArray.join("\n"));
 
  		})
	},
	curl: function(arguments, done){
		if(arguments.indexOf('http://') === -1){
			if(arguments.indexOf('www.') === -1){
				arguments = 'http://www.' + arguments;
			} else {
				arguments = 'http://' + arguments;
			}
		}
		request(arguments, function(error, response, body){
			if(!error && response.statusCode == 200){
				done(body)
			}
		})
	}
}

// var done = function(output){
// 	process.stdout.write(output + "\n");
// 	process.stdout.write("prompt > ");
// }

//can do this too:
// exports.pwd =  function(){
// 	  	process.stdout.write(process.env.PWD)
// 	  	process.stdout.write('\nprompt > ');
// 	}

// exports.date = function(){
// 	  	process.stdout.write(Date())
// 	  	process.stdout.write('\nprompt > ');
// 	}

