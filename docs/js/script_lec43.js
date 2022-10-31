var string = "Hello";
string += " World ";
console.log(string)

var x = "4";
var y = 4;

if (x === y) {

    console.log("type coercion b/c string '4' has number val of 4");
}
else {
    console.log("type coercion not performed b/c strict equality used for string '4' === number val of 4");
}


var x = 3;
var y = 6;
var z = "Me";

if (x > 3 || typeof (z) != typeof (NaN) || y == 7) {

    console.log("eval ended too early OR");
}
else {
    console.log("eval done for all OR");
}

if (x < y && typeof (z) != typeof (NaN) && z != "Me") {

    console.log("eval ended too early for AND");
}
else {
    console.log("eval done for all AND");
}

function order(entree, side) {

    if (side && entree) {
        console.log("Your order is " + entree + " with " + side);
    }
    else {
        if (entree) {
            console.log("Your order is " + entree + ' with ' + "rice");
        }
        else {
            if (side) {
                console.log("Please select entree to go with " + side);
            }
            else {
                console.log("Please select entree and side.");
            }
        }
    }
}

order();
order("Chicken", "potatoes");
order("Chicken", "");
order("", "noodles");