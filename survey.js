
// //console.log("Hello, welcome to the profile generator!");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
    rl.question('What\'s an activity you like doing?', (activity) => {
    	rl.question('What do you listen to while doing that?', (music) => {
    		rl.question('Which meal is your favourite?', (time) => {
    			rl.question('Whats your favourite thing to eat for that meal?', (food) => {
    				rl.question('Which sport is your absolute favourite?', (sport) => {
    					rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (power) => {
    						var result = (`${name} loves listing to ${music} when ${activity}, devouring ${food} for ${time}, prefers ${sport} over any other sport, and is amazing at ${power}.`);
        					console.log(result);
        					rl.close();
    					});
    				});
    			});
    		});

    	});
    });
});


       