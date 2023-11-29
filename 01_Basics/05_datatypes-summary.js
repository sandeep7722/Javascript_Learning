//Primitive(all call by value)
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId);//false

const bigNumber=34543282648529844n



//Reference(Non primitive)
//Array, Objects, Functions

const heros=["saktiman", "naagraaj", 'juniorji'];

const myObj={
    name:"sandeep",
    age:5
}

const myfunction=function(){
    console.log("Hello World");
}

// console.log(typeof myObj);//object
// console.log(typeof bigNumber);//bigint
// console.log(typeof myfunction);//funtion
// console.log(typeof id);//symbol



