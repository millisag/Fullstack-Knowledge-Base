// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 41;

let userName: string | string[];

userName = 'Millisa';

let isInstructor: boolean;

isInstructor = false;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Millisa',
    age: 41
}

// person = {
//    isEmployee: false
// };

let people: {
    name: string;
    age: number;
}[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12345;