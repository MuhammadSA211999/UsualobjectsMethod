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
const myName = "name"
const name = person[myName]
const hscInfo = person["college"] + " " + person["hscResult"]
const uniName = "institute"
const uniResult = "uniCGPA"
const uniInfo = person[uniName] + " " + person[uniResult]
// console.log(hscInfo, uniInfo);

// object value accessing by ( for .... in )looping
function getInfo() {
    let fullInfo = ""
    for (let key in person) {
        fullInfo += " " + person[key]
        // let value = person[key]
        // fullInfo = fullInfo + " " + value
    }
    return fullInfo.trimStart()
}
// console.log(getInfo());


// deleteing a object properties
delete person["now"]
// console.log(person)

const nestedObj = {
    name: 'Muhammad SA',
    age: 24,
    status: "Unmarried",
    wife: {
        name: "Gulbahar",
        age: "Unknown",
        status: "Unknown"
    }
}

// accessing nested object properties
const status = "status"
const wifeStatus = nestedObj["wife"][status]
// console.log(wifeStatus);

// nested objects and arrays
const myObj = {
    name: "MSA",
    age: 24,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
const myCars = "cars"
const models = "models"

for (let car in myObj[myCars]) {
    let allBrands = myObj[myCars][car]
    // console.log(allBrands.name);
    for (let singleCarIndex in allBrands.models) {
        const cars = allBrands[models][singleCarIndex]
        // console.log(cars);
    }

}

//objects methods
const student = {
    name: 'MSA',
    age: 24,
    institute: "NSTU",
    uniCGPA: 3.23,
    college: "GSC",
    hscResult: 5,
    born: "Sylhet",
    now: 'Noakhali',

    //objects method 
    lightInfo: function () {
        return `${this.name} is ${this.age} years old.`
    }
}
// const info = student.lightInfo()
const info = student["lightInfo"]() //evabe call kora zay, return value print korbe.
console.log(info);

student.educationInfo = function () {
    return `${this.name} completed his HSC from ${this.college}`
}

const hsc = student["educationInfo"]()
console.log(hsc);




