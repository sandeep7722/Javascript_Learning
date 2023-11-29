let score="33";

console.log(typeof score);//string
//or - both same
console.log(typeof(score));//string


let valueInNumber=Number(score);
console.log(valueInNumber);//33
console.log(typeof valueInNumber);//number

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn=0

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//false

// 1 => true
//0 => false
//"" => false
//"sandeep" => true

let someNumber= 45
let stringNumber=String(someNumber);
console.log(stringNumber);//45
console.log(typeof stringNumber);// string

