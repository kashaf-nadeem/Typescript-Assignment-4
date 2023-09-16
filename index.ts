var person_name: string = "Soban"

console.log("Hello " + person_name + ", would you like to learn some Typescript today?" );

/////////////////////////////////////////////

var person_name: string = "Soban"

console.log(`Uppercase: ${person_name.toUpperCase()}`);
console.log(`Lowercase: ${person_name.toLowerCase()}`);
console.log(`Titlecase: ${person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()}`);

/////////////////////////////////////////////

console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\"")

/////////////////////////////////////////////

var famous_person = "Albert Einstein";

console.log(`${famous_person} once said, \"A person who never made a mistake never tried anything new.\"`)

/////////////////////////////////////////////

var person_name: string = "\n\n\t\t Soban \n\n"

console.log("Without trim: ");
console.log(person_name);

console.log("With trim: ");
console.log(person_name.trim());

/////////////////////////////////////////////

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

/////////////////////////////////////////////

var fav_num: number = 7;

console.log("My favorite number is: " + fav_num);

/////////////////////////////////////////////

var names: string[] = ["Soban", "Ali", "Ahmed", "Hassan", "Hussain"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, how are you today?`);
}

/////////////////////////////////////////////

var fav_transport: string[] = ["Car", "Motorcycle", "Bicycle", "Airplane", "Train"];

for (let i = 0; i < fav_transport.length; i++) {
    console.log(`I would like to own a ${fav_transport[i]}`);
}

/////////////////////////////////////////////

var deceased_persons: string[] = ["ALbert", "Nusrat", "Newton"];

for (let i = 0; i < deceased_persons.length; i++) {
    //print a message to each person, inviting them to dinner.
    console.log(`Hello ${deceased_persons[i]}, you are invited to dinner.`);
}

console.log(`\n\nUnfortunately, ${deceased_persons[0]} cannot make it to dinner.`);
deceased_persons.splice(0, 1);

console.log("\n\nRemaining guests are: ")
for (let i = 0; i < deceased_persons.length; i++) {
    //print a message to each person, inviting them to dinner.
    console.log(`Hello ${deceased_persons[i]}, you are invited to dinner.`);
}


