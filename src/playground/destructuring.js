

//
// Object Destructuring
//

// const person = {
//     name: 'Joao',
//     age: 23,
//     location: {
//         city: 'Brussels',
//         temp: 23
//     }
// };

// // const {name} = person;
// // const {age} = person;

// const {name:firstName='Anonymous',age} = person;
// console.log(`${firstName} is ${age}.`);

// const{city,temp: temperature} = person.location;
// if(city && temperature) 
//     console.log(`It is ${temperature} degrees in ${city}.`);

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher:  {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


//
//  Array Destructuring
//

const address =['Rua das Gandarinhas 534', 'Trofa', 'Porto', '4785-110'];

//to skip first item and last item
const [, city, state = 'Lisbon'] = address

console.log(`You are in ${city}, ${state}.`);

const item = ['coffee (hot)', '1.50', '2.00', '2.50'];
const [type, ,medium ,] = item
console.log(`A medium ${type} costs ${medium}`);