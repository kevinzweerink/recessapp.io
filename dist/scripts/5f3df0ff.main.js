$(document).ready(function() {
	var phrases = ["Your afternoon called. It wants itself back.","Lunchtime! Shut down and refuel. With a salad, wink wink.", "Late night, huh? Maybe time to shut down.", "Your computer is sucking down energy, why don't you do the same and go for a run?", "Bamboo grows 6 inches per hour. What did you do for the last hour?", "Remember, your paying cash money for every second you're using this computer", "Aaaaaand stop. Pencils down."];
	var backgrounds = ["blue", "green", "yellow"];

	var text = $(".banner-text");
	
	randomPhrase = 0;
	randomColor = 0;
	
	function changestuff(phrase, color) {
		var selectedphrase = phrases[phrase];
		var selectedcolor = backgrounds[color];
		text.text(selectedphrase);	
		text.addClass(selectedcolor);
	}
	
	$("#header-a").mouseout(function() {
	
		var oldPhrase = randomPhrase;
		var oldColor = randomColor;
		var found=true;
		
		setTimeout(function() {
		
			text.removeClass("blue");
			text.removeClass("green");
			text.removeClass("yellow");
			
			do {
				randomPhrase = Math.floor(Math.random()*(phrases.length));
				randomColor = Math.floor(Math.random()*(backgrounds.length));
				if ((oldPhrase != randomPhrase) && (oldColor != randomColor)) {
					found = false;
					changestuff(randomPhrase, randomColor);
				} 
			} while (found == true);
		}, 70);
	});
	
	
});
