//So here is my 5th class assignment:
// Let's start
// Hello World  "printing hello world in console"
var message = "Hello World";
console.log(message);
// change data;
var fullName = "Adeeba";
fullName = "Farhan";
console.log(fullName);
// print name with message;
//let personName: string = "Adeeba";
//console.log("Good day,"+ personName + "!")
//Calculation
var a = 4 * (5 + 7) + 5 - 1 / 3;
console.log(a);
//let a: number = 5;
// let b: number = 2;
//console.log("a+b=", a+b);
//console.log("a-b=", a-b);
//console.log("a*b=", a*b);
//console.log("a/b=", a/b);
//console.log("a%b=", a%b);
//1. Primitives Data types;
//String:
var fruit = "Mango";
console.log(fruit);
//Number:
var myAge = 19;
console.log("I'm ".concat(myAge, " years old"));
//Boolean:
var x = 5;
var y = 10;
console.log(x < 10, y < 5);
console.log(x > 10, y < 5);
//Undefined:
var user_name;
console.log(user_name); //output undefined
//Null
var item = null;
console.log(null);
//ANY:  the "any" type is used to denote a variable that can hold values of any data type. 
var objects = ("khan");
var items = 4;
var statement = false;
console.log(objects, items, statement);
//2. Cases
//camelCase: In camel case, the first letter of each word is capitalized except for the first word, which starts with a lowercase letter.
//snake_case: In snake case, words are written in lowercase and separated by underscores ('_').
//PascalCase: In Pascal case, the first letter of each word, including the first word, is capitalized.
var userName = "Adeeba"; //camelCase //popularly used in TS/JS
var user_names = "Kiran"; //snake_case
var UserName = "Farhan"; //PascalCase
//console.log(userName,user_names,UserName)
//Arrays: An array is a data structure in programming used to store a collection of elements or values under a single variable name.
///let students: string[]=["khan","adeeba","farhan","hamza"]
///students[0]="Maha" //here we're using index(arrays address)
///console.log(students)
//let firstStudentName= students[0]
//console.log(students[0])
//console.log(students[1],students[3])
//Do "ANY" data type in arrays
//let abc: any=["Adeeba","Farhan",1,3,true,false,"khan"]
//console.log(abc);
