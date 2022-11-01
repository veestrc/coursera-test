// Pass by val for primitive, changing b does not change a
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update");
console.log("a: " + a);
console.log("b: " + b);

// Pass by val for object, changing b also changes a for an object
var a = {x: 7};
var b = a;
console.log(a);
console.log(b);

b.x = 5;// b.x == a.x b/x both pointing to same mem loc as b = a which is an object
console.log("after b.x update");
console.log(a);
console.log(b);

// Pass by ref vs by val
// Eg of pass by val, changing passed arg after it's passed doesn't change orig val passed into func 
function changePrimitive(primValue) {
    console.log("in changePrimitive ...");
    console.log("before");
    console.log(primValue);

    primValue = 5;
    console.log("after:");
    console.log(primValue);
}

var val = 7;// orig val passed into func
changePrimitive(val); // primValue == val but pointing to two differ mem loc
console.log("after changePrimitive, orig val");
console.log(val);

function changeObject (objValue) {
    console.log("in changeObj...");
    console.log("before");
    console.log(objValue);

    objValue.x = 8;
    console.log("after:");
    console.log(objValue);
}

val = {x: 3}; // objValue and val pointing to same mem loc 
changeObject(val); // objValue == val
console.log("after changeObj, orig val");
console.log(val);
