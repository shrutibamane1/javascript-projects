let date = new Date()
console.log(date);   //2026-05-23T14:01:57.039Z

// console.log(date.toString());    //Sat May 23 2026 14:01:57 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString());   //Sat May 23 2026
// console.log(date.toLocaleString());  //5/23/2026, 2:01:57 PM
// console.log(date.toLocaleDateString());  //5/23/2026
// console.log(typeof(date));   // object


let ownCreatedDate = new Date(1999, 10, 19)   
console.log(ownCreatedDate.toDateString());   // Fri Nov 19 1999   month start from 0

let ownCreatedDate2 = new Date(1999 , 10, 19, 10, 2)
console.log(ownCreatedDate.toLocaleString());

let date2 = new Date("11-19-1999")
console.log(date2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date2.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());
console.log(newDate.getDate());

console.log(`Date ${newDate.getDate()} , day ${newDate.getDay()+1}`);
















