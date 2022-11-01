var array = new Array();
array[0] = "Vee";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = ["HTML", "CSS", "JS", "Backend"];
array[4] = {course: "HTML, CSS, JS, Backend", level: "200", location: "online"};

console.log(array);

array[2](array[0]);
array[2]("Courtney");

console.log(array[4].location);
	
for (key in array[3]) {// the word key is aribitary, you can use any term
    console.log(key);
}

for (property in array[3]) {
    console.log(array[3]);
}

for (property in array[4]) {
    console.log(array[4].level);
}

// Short hand array creation

var names = [{ name: "Vee"}, {name: "Chris"}, "Curtis"];
console.log(names);

for (var i =0; i< array[3].length; i++) {
    console.log("Course name is " + array[3][i]);
}

for (key in array[3]) {
    console.log("Course name is " + array[3][key]);
}

names.greeting = "Hi";
for (key in names) {
    if(names[key].name) {
        console.log("These are eles of names.name: " + names[key].name); 
    }
    else { if(!names.greeting) { 
        console.log ("This are eles of names " + names[key]);
            }
            else { 
                console.log("Don't print greeting");
            }
    }
}

for (var i =0; i< names.length; i++) {
    if(names[i].greeting){ //no op
    } else { if (names[i].name ) {
    console.log("Name is " + names[i].name);
    } else {console.log("Name is " + names[i]);}
    }
}

console.log(names);
