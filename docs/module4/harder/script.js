// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (val in names) {
    var firstLetter = names[val].charAt(0).toLowerCase();
    if (firstLetter == 'j') {
      // byeSpeaker.xxxx
      byeSpeaker(names[val]);
    } else {
      // helloSpeaker.xxxx
      helloSpeaker(names[val]);
    }
  }
})()
