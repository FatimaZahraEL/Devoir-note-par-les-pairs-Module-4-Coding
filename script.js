(function (window) {
	var names = ["Israe", "karima", "Jon", "jamila", "Jalal", "Manal", "FatimaZahra", "Samia"];
	for (var i=0; i < names.length; i++) {
	  var premierLettre = names[i].charAt(0).toLowerCase();
		if (premierLettre == "j"||premierLettre=="J") {
		  byeSpeaker.speak(names[i]);
		} else {
		  helloSpeaker.speak(names[i]);
		}
	}
})(window);

