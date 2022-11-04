(function (window) {
    var veeGreeter2 = {};
    anyname = "Vee";
    var greeting = "What are you doing ";
    veeGreeter2.sayHello = function () {
        console.log(greeting + anyname + "?");
    }
    window.veeGreeter2 = veeGreeter2; // exposing veeGreeter fake namespace to global lexical
})(window);// using global window obj as arg so IIFE can access all var in the global lexical



var veeGreeter = {};
veeGreeter.name = "Vee";// property name
veeGreeter.sayHello = function () { // property sayHello
    console.log("Hello " + veeGreeter.name);
    for (aname in names) {
        console.log("Hi " + names[aname]);// use the global var names array
    }

}
