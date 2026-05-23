const name= "shruti"
const number = 123

console.log(`my name is ${name} and phone number is ${number}`);

//string declaration anothe way

let myname= new String("pratika")
console.log(myname[0]);   //p
console.log(myname.__proto__);   //{}

,l

console.log(myname.length);  //7
console.log(myname.toUpperCase());   //PRATIKA
console.log(myname.toLowerCase());   //pratika
console.log(myname.charAt(3));       //t
console.log(myname.indexOf('s'));    //-1
console.log(myname.indexOf('z'));    //-1

const newString = myname.substring(2,10)   //atika
const newString2 = myname.substring(2,4)  //at
console.log(newString);
console.log(newString2);

const newString3 = myname.slice(-8 , 4)
console.log(newString3); //prat

const newString4 = "    shr    "
console.log(newString4);      //    shr  
console.log(newString4.trim());   //shr

const url = "shruti=hmail.com"   
console.log(url.replace('=h', '@g'));   //shruti@ghail.com

console.log(url.includes('shruti'));   //true
console.log(url.includes('shrut='));    //false

console.log(url.split('-'));






