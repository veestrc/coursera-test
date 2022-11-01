//Func(s) are First-Class data
//Func(s) ARE Objects
function multiply(x,y) {
    return x * y;
}

console.log(multiply(4,9));
multiply.version = "v.1.0.0";
console.log(multiply.toString());
console.log(multiply.version);

function makeMultiplier(multiplier) { //makeMultiplier func creates myFunc funtion
    var myFunc = function (x) {
        return multiplier * x;
    };
    
    return myFunc; // return results of created func
    
}

var multiplyBy3 = makeMultiplier(3); // this statement passes 3 to makeMultiplier as the multiplier arg
	
console.log(multiplyBy3(4)); // calling the multiplyBy3 var func and passing it 4 

var doubleAll = makeMultiplier(2);

// Passing func as args

function doOperationOn(x, operation) {
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);// arg 5 and multiplyBy3 are passed to doOperationOn func where multiplyBy3 is a func being passed as an arg
console.log(result);

result = doOperationOn(40, doubleAll);

console.log(result);