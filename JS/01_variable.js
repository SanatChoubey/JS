// Data Type

// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object


//-------- statement ---------

let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

// var can be redeclare but let and const cannot in same scope
// var x = 2;   // Allowed
// let x = 3;   // Not allowed

// {
// let x = 2;   // Allowed
// let x = 3;   // Not allowed
// }

// {
// let x = 2;   // Allowed
// var x = 3;   // Not allowed
// }

// let x = 2;   // Allowed

// {
// let x = 3;   // Allowed
// }

// {
// let x = 4;    // Allowed
// }
// global variable
var a = 5
// a  =  global variable but in web window.a  = 5 || this.a = 5

console.log(a)
{
    console.log(a)
    var a = 10 // var have function scope so it is global function and it can be access outside block
}
console.log(a)
var a = 100
console.log(a) // you can recreate var with same name  
let b = 30
{
    // console.log(b) // can't access before initialize if b is out of scope and if b is not in scope then it looks in outerscope
    let b = 20
}
console.log(b)

// --------------- Hoisting ------------
console.log('hoisting access var variable before intialize would be undefined', hoist)

var  hoist  = 5
console.log('after intialize, ' ,hoist)

// ------------ ------ pass by reference vs pass by value ------------

// 1 - Javacript is pass by value
// 2 - object types are reference types 
// 3 - The obj argument inside myFunc is a reference to the same object, 

var obj1 =  5;
var obj2  = obj1;
console.log('current  value  of obj after assigning obj1',obj2)
obj1 = 10 
console.log('current value after reassigning obj1 ', obj2) // clear show that it is pass by value value is assigned 
 // check for array 
 var arr1 = [1,2]
 var arr2 = arr1
 console.log('current  value  of arr after assigning arr1',arr2)
arr1 = [3,4]
console.log('current value after reassigning arr1 ', arr2) 
// -------- shallow copy vs deep copy --------
const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };
const shallowCopy2 = Object.assign({}, obj);

shallowCopy1.name = 'Version 2';
shallowCopy1.additionalInfo.version = 2;

shallowCopy2.name = 'Version 2';
shallowCopy2.additionalInfo.version = 3;

console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
console.log(shallowCopy2); 

//
//  array and object are reference value