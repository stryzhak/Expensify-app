// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Kyiv',
//         temp: 92
//     }
// };

// const {name, age} = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;
// if (person.location.city && person.location.temp){
// console.log(`It's ${temp} in ${city}.`);
// }



//Array destructuring

const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];

const [ , city, state] = address;

console.log(`You are in ${city} ${state}`);