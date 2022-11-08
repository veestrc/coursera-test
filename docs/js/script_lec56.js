// Event Handling

document.addEventListener("DOMContentLoaded", function(event) {

    function sayHello (event) {

        console.log(event);
        this.textContent = "Said it!"; //since setting ele.addEvenListener is calling sayHello func
        // "this" refers to the button and textContent refers to the button's content
       var aname = 
       document.getElementById("name").value;
       var message = "<h2>Hello " + aname + "!</h2>"; // displays the message as a h2 ele
    
       //document.getElementById("content").textContent = message; // assigns the ele with id content
       //  to the value assigned to message var above and will dispaly on the HTMS for the ele
       // with the content id
        
       document
       .getElementById("content")
       .innerHTML = message;

       var titleOrig = "Lecture 55 the Event arg";
    
       if (aname === "student") {
        var titleNew = titleOrig;
        titleNew += " is being manipulated";
        document.querySelector("#title")
          .textContent = titleNew;   
       } else {
        document.querySelector("#title")
          .textContent = titleOrig;
       }
    }  

    //Unobtrusive event binding
    document.querySelector('button')
        .addEventListener("click", sayHello);

    document.querySelector("body")
     .addEventListener("mousemove", 
        function (event) {
            if (event.shiftKey === true) {
                console.log("Horizontal coord " + event.clientX);
            console.log("Vertical coord " + event.clientY);
            }
            
        });
});

/*
function clickHandler() {
    document.getElementById('clicked').innerHTML = 'Button is Clicked';
}

function clickHandler2() {
    document.getElementById('clicked').innerHTML = '';
}

var ele= document.getElementById('btn');
var inp= document.querySelector('input').onblur = clickHandler2;

ele.addEventListener('click', sayHello); //params event type, event handler function name

ele.addEventListener('click', clickHandler);

*/