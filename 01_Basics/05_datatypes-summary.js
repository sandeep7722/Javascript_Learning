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


//Stack memory(Primitive), Heap (Non-Primitive)

let myYoutubename="sandeepkumarsaroj"

let anothername=myYoutubename//copy of myYoutubename assigned
anothername="saroj"

// console.log(myYoutubename)//sandeepkumarsaroj
// console.log(anothername)//saroj

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne  //same memory reference assign to usertwo as userOne
userTwo.email="sandeep@google.com"

// console.log(userOne.email);//sandeep@google.com
// console.log(userTwo.email);//sandeep@google.com


