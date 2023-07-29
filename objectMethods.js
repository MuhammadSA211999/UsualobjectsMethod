// Object in JavaScript: An object is the collection of properties and methods. An object properties is an association between a name and a value.Usually, we called it's a (key:value) pairing. Properties value can be primitive, another object or a function. A object method is a property that contains a function defenation.
// We can create an object using the Object() constructor, object intializer or a literal syntex.

// there are some example of objects in JavaScript
// 1. Date object, 2. Array object 3. Function object and 4 Window object

// ** A javaScript object is collection of unorderd properties.

const person = {
    name: 'MSA',
    age: 24,
    institute: "NSTU",
    uniCGPA: 3.23,
    college: "GSC",
    hscResult: 5,
    born: "Sylhet",
    now: 'Noakhali',
}
myName = "name"
const name = person[myName]
const hscInfo = person["college"] + " " + person["hscResult"]
const uniName = "institute"
const uniResult = "uniCGPA"
const uniInfo = person[uniName] + " " + person[uniResult]
console.log(hscInfo, uniInfo);
