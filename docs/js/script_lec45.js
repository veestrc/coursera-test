var  company = new Object();

company.name = new Object();
company.name.first = "Vee";
company.name.last = "Courtney";
company.address = new Object();
company.address.street = "123 Mark Lane";
company.address.city = "Newsy";
company.address.state = "FL";
console.log(company);

var person = new Object();
person.name ="Vee Courtney"
person.dob = new Object();
person.dob.month = "Dec";
person.dob.year = "1962";
console.log(person);
person["fav color"] = "red";
console.log("This is " + person.name + " favorite color " + person["fav color"]);
var favArtist = "Favorite Aritist";
person[favArtist] = "Stevie Wonder";
console.log(person);
console.log(person.favArtist);
console.log(person[favArtist]);

var person = {
    name: "Sy Courtney",
    dob: {
        month: "Se[",
        year: "2004"
        },
    "favorite color": "red",
    address: {
                street: "145 Seen St",
                city: "Glenn",
                state: "MO"
            },
    "favorite artist": "Lizzo"
}
console.log(person["favorite artist"]);
