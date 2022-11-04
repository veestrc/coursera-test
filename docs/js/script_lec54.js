// Event Handling

document.addEventListener("DOMContentLoaded", function() {

    function sayHello () {
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

    //Unobtrusive event binding
    document.querySelector('button')
        .addEventListener("click", sayHello);
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