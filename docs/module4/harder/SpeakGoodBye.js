// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
(function (window) {
  var speakWord = "Good Bye";
  var byeSpeaker = {};
  byeSpeaker = function speak(name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
