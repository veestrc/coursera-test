function test () {
    console.log("Hello coursera");
}

test();

function test2 () {
    console.log(this);
}

test2();


function test3(x, y) {
    var z = x + y;
    console.log(this);
    console.log("this arg passed to x param "  + x)
    this.myName = "Vee";
    return z;
}

console.log(test3(4,8));

console.log(this.myName);

test2();

console.log(this.myName);

test();
console.log(this.myName);
console.log(window.myName);


//Function constructors

function Circle (radius) {/**** can't return anything from a constructor func ***/ 

    this.radius = radius; // creates a global property to object Circle
    // creata a methods (which are func set on properties) w/in the constructor function

    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };

}

function Circle2 (radius) {
    this.radius = radius;
    }	
        
    Circle2.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    }

var myCircle = new Circle(10); // equvilant to new Object();
console.log(myCircle);
console.log(myCircle.getArea());
console.log(myCircle);

var myCircle2 = new Circle2(4);
console.log(myCircle2);
var yourCircle = new Circle(3);
var yourCircle2 = new Circle2(7);
console.log(yourCircle);
console.log(yourCircle2);