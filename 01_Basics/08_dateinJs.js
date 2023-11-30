
let myDate=new Date();

// console.log(myDate.toString());//Thu Nov 30 2023 14:11:21 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//11/30/2023, 2:11:21 PM
// console.log(myDate.toLocaleString());//11/30/2023, 2:11:21 PM
// console.log(typeof myDate);//object

// let myCreatedDate=new Date(2023, 0, 23)
//let myCreatedDate=new Date(2023, 0, 23, 5, 3)//1/23/2023, 5:03:00 AM
let myCreatedDate=new Date("2023-01-14")//1/14/2023, 12:00:00 AM
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);//2023-11-30T14:45:39.228Z

// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",

})









