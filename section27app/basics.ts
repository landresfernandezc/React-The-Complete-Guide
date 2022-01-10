//primitives
//Complex types
//function types, parameters

//primitives

let age: number;
age = 1;
let username: string;
username = "";
let isInstructor: boolean;
isInstructor = false;

//Complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Andres",
  age: 26,
};

let people: {
  name: string;
  age: number;
}[];

//type inference

let course = "React - The Comple Guide";

//course=222 Error because it was declare like string

//Union types
//Allow to declare multiple types for the same var
let course1: string | number = "React - The Comple Guide";
course1 = 1;
//Type aliase
type Person = {
  name: string;
  age: number;
};
let person1: Person;
let people1: Person[];

//Functions and types

function add(a: number, b: number) {
  return a + b;
}
//void type function implicit 
function print(value:any){
    console.log(value);
}

// Generics T say that the values are the same value, if you pass a number array or a string array TS know it
//T work with any type: type safety
function insertAtBeggining<T>(array:T[],value:T){
    const newArray = [value,...array];
    return newArray;
}

