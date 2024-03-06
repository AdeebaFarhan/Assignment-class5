//So here is my 5th class assignment:

// Let's start

// Hello World  "printing hello world in console"

let message : string = "Hello World";
console.log(message);
// change data;

let fullName = "Adeeba";
fullName = "Farhan"
console.log(fullName);

// print name with message;

let personName: string = "Adeeba";
console.log("Good day,"+ personName + "!")

//Calculation

let c: number = 4*(5+7)+5-1/3;
console.log(c)

let a: number = 5;
 let b: number = 2;
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);

//Primitives Data types;

//String:
let fruit: string= "Mango";
console.log(fruit)

//Number:

const myAge: number = 19
console.log(`I'm ${myAge} years old`);

//Boolean:

let x = 5
let y = 10
console.log(x <10 , y <5);
console.log(x>10,y<5)

//Undefined:

let user_name: string 
console.log(user_name) //output undefined

//Null
let item = null
console.log(null)

//ANY:  the "any" type is used to denote a variable that can hold values of any data type. 

let objects: any = ("khan")
let items: any = 4
let statement : any = false

console.log(objects,items,statement);
// Cases

//camelCase: In camel case, the first letter of each word is capitalized except for the first word, which starts with a lowercase letter.
//snake_case: In snake case, words are written in lowercase and separated by underscores ('_').
//PascalCase: In Pascal case, the first letter of each word, including the first word, is capitalized.

let userName= "Adeeba" //camelCase //popularly used in TS/JS
let user_names = "Kiran" //snake_case
let UserName= "Farhan" //PascalCase

console.log(userName,user_names,UserName)

//Arrays: An array is a data structure in programming used to store a collection of elements or values under a single variable name.

let students: string[]=["khan","adeeba","farhan","hamza"]
students[0]="Maha" //here we're using index(arrays address)
console.log(students)
let firstStudentName= students[0]
console.log(students[0])
console.log(students[1],students[3])

//Do "ANY" data type in arrays

let abc: any=["Adeeba","Farhan",1,3,true,false,"khan"]
console.log(abc);