//array

const myArr=[0, 1, 2, 3, 4, 5, true, "sandeep"]
const myHeros=["sandeep", "kuldeep"]

const myArr2=new Array(1,2,3,4)

//console.log(myArr);

//Array method

myArr.push(6);
//console.log(myArr);//6 added in last

myArr.pop();
//console.log(myArr);//6 deleted from last

//myArr.unshift(9);//starting me 9 add ho jata hai
//console.log(myArr);
myArr.shift();//delete 1 element from starting
//console.log(myArr);

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(3));//2
const newArr=myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);//string
