// use objects to contain data about the object itself
// curly braces 
// colon after each property, comma after each value 

let harris = {
    firstName: `Harris`,
    lastName: `Caldwell`,
    age: `21`,
    job: `student`,
    friends: [`winnie`, `margot`, `robbie`]
};

// dot notation 

console.log(harris.lastName); // you can add new values to object, ex: harris.location = `Plano`;

// bracket notation

console.log(harris[`lastName`]);

// let interested = prompt(`Do you want to know about harris? Choose between firstName, lastName, age, and job`);
// console.log(harris[interested]);

console.log(`${harris.firstName} has ${harris.friends.length} friends and her best friend is ${harris.friends[0]}`)


