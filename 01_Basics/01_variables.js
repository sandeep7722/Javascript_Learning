const accountId=144553
let accountEmail="sandeep@gmail.com"
var accoountPassword="12345"
accountCity="Jaipur"
let accountState;
// accountId=2; //not allowed for const variables.

accountEmail="saroj@gmail.com"
accoountPassword="11111"
accountCity="Bangalore"
//print accountId
console.log(accountId);

console.table([accountId,accountEmail,accoountPassword,accountCity,accountState]);
/* output of above line.
(index) │      Values       │
├─────────┼───────────────────┤
│    0    │      144553       │
│    1    │ 'saroj@gmail.com' │
│    2    │      '11111'      │
│    3    │    'Bangalore'    │
│    4    │     undefined  

*/
