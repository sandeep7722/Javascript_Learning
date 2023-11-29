const name="sandeep"
const repoCount=50

// console.log(name+repoCount+ " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const gameName=new String('Sandeep');//here string is an object
// console.log(gameName);//[String: 'Sandeep']
// console.log(gameName[0]);//S
// console.log(gameName.__proto__);//{}
// console.log(gameName.length);//7
// console.log(gameName.toUpperCase());//SANDEEP
// console.log(gameName.charAt(5));//e
// console.log(gameName.indexOf('p'));//6

const newString=gameName.substring(0,4);
// console.log(newString);//Sand

const anotherString=gameName.slice(-8,4);
// console.log(anotherString);//Sand


const newStringOne="     sandeep     "
// console.log(newStringOne);//    sandeep
// console.log(newStringOne.trim());//sandeep

const url="https://sandeep.com//sandeep%20saroj"

// url.replace('%20', '-');
// console.log(url.replace('%20', '-'));//https://sandeep.com//sandeep-saroj
// console.log(url.includes('kumar'))//false

console.log(gameName.split('-'));