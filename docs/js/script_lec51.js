// javascript closure example

// outer function
function greet() {

    // variable defined outside the inner function
    let name = 'John';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value

//Closures

function makeMultiplier (multiplier) {
    // * see note below

    function b() {
        console.log("Multiplier is: " + multiplier);
    }

    b();

    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);// *equiv to placing var multiplier = 2 as first line of makeMuliplier
console.log(doubleAll(10)); // the doubleAll() here executes the inner no-name function of makeMultiplier