let array = [1,2,4,6]
// console.log(array[0]);  // 1
// console.log(array[-1]);  //undefined
// console.log(array.length);  // 4

array.push(10)   // add oen element for last
array.push(15)

// console.log(array);   // [ 1, 2, 4, 6, 10, 15 ]
// console.log(array.length);   // 6
array.pop()    // removes last one element
// console.log(array)   // [ 1, 2, 4, 6, 10 ]
// console.log(array.length);  // 5

array.unshift(9)  
// console.log(array[0]);   //9
  
array.shift()         // it autometic remove unshify elemnt like 9 form 1st index
// console.log(array);   // It added one elemnt at start [ 9, 1, 2, 4, 6, 10 ]
// console.log(array[0]);   //1


//    [ 1, 2, 4, 6, 10 ]

// console.log(array.includes(2));    //true
// console.log(array.includes(8));    //false
// console.log(array.indexOf(190));   //-1 
// console.log(array.indexOf(4));     // 2

let newArray = array.join()  // join() can convert array to string

// console.log(array);   // [ 1, 2, 4, 6, 10 ]

// console.log(newArray);  // 1,2,4,6,10

const myn1 = array.slice(1, 3)    // it print only 1, 2 but not include 3'rd ...[ 2, 4 ]
// console.log("A", myn1);

const myn2 = array.splice(1, 3)  // it print only 1, 2, 3 also...[ 2, 4, 6]
// console.log("B", myn2);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const A= [1,2,3,4,5]
const B =[6,7,8,9,10]

// ++++++++++++  Push  +++++++++++

// A.push(B)
// console.log(A);   //  [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

//  ++++++++++  Concat +++++++++++++

// A.concat(B)
// console.log(A);   // [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

// C = A.concat(B)
// console.log(C);     // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// ++++++++   spread operator ++++++

const C = [...A,...B]
// console.log(C);       // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// ++++++++++  flat function

const D = [1,2,3, [2,6, [9,6], 5,6,7,8, [7,8]], [0,8]]
const E = D.flat(Infinity)     
// console.log(E);   // [ 1, 2, 3, 2, 6, 9, 6, 5, 6, 7, 8, 7, 8, 0, 8 ]




console.log(Array.isArray["shruti"]);   // undefined
console.log(Array.from("shruti"));        // [ 's', 'h', 'r', 'u', 't', 'i' ]
console.log(Array.from({name: "shruti"}));  // []

let A1 = 100
let B1 =200
let C1 = 300

console.log(Array.of(A1, B1, C1));   // [ 100, 200, 300 ]












