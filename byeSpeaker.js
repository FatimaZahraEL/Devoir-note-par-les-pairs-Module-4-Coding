(function (window) {
	var byeSpeaker = {};
	var Word = "Goodbye";
	byeSpeaker.speak = function (name) {
	  console.log(Word + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);