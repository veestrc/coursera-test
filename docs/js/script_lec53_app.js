// DOM Manipulation

//console.log(document.getElementById("name"));

//console.log(document instanceof Document)

function sayHello () {
   var aname = 
   document.getElementById("name").value;
   var message = "<h2>Hello " + aname + "!</h2>"; // displays the message as a h2 ele

   //document.getElementById("content").textContent = message; // assigns the ele with id content
   //  to the value assigned to message var above and will dispaly on the HTMS for the ele
   // with the content id
    
   document
   .getElementById("content")
   .innerHTML = message;

   if (aname === "student") {
    var title =
        document
        .querySelector("#title")// or place h1 in quotes since there's only one in the doc
        .textContent;
    title += " is being manipulated";
    document
    .querySelector("#title")
    .textContent = title;

   }
}





