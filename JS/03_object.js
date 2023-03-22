
//  Object is core of JS

//  Cover this as well in object


// let obj1 = {
//     name: 'Sanat',
//     getName: function() {
//         console.log(this.name)
//     }
// }
// console.log(obj1.getName()) // Sanat
// const refre =  obj1.getName;
// console.log(refre())// undefined because this bind with dynamic scope

// name = 'sam'
// console.log(refre())




// ---------  this scope in nested object --------

//  const obj2 = {
//     name: 'JS is Love',
//     getObjective: function () {
//             const self = this;
//             function sleeper () {
//                 console.log(this)
//             }
//             setTimeout(sleeper.bind(this), 2000)
//         }
// }

 
//  obj2.getObjective()
// -------- shallow copy vs deep copy --------
// const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

// const shallowCopy1 = { ...obj };
// const shallowCopy2 = Object.assign({}, obj);

// shallowCopy1.name = 'Version 2';
// shallowCopy1.additionalInfo.version = 2;

// shallowCopy2.name = 'Version 2';
// shallowCopy2.additionalInfo.version = 3;

// console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
// console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
// console.log(shallowCopy2); 
var bbc = {
    a: 1,
    b: 2
}
// --------- seal --------------
// creates an object
var obj = {
    // assigns 10 to value
    value: 10
};
// creates a non-extensible object
Object.seal(obj);
// the value gets updated to 20
obj.value = 20;
console.log(obj.value); // 20
var obj = {
    // assigns 10 to value
    value: 10
};
// creates a non-extensible object
Object.freeze(obj);
// updates the value
obj.value = 20;
// but cannot change the existing value
console.log(obj.value); // 10

// console.log(Object.preventExtensions(bbc))


// -------------array reference  ---- ------------ 

// const arr =  [1,2, {a: {b: 'c'}}]
 
// const shallowArr = [... arr]
// shallowArr[2].a.b = 'd'
// console.log(arr, shallowArr)



// reference check of array
// if you change whole array then it will not change arr reference

// const func = (ar) => {
//     ar[0] = 10
// }
// const arrs  = [5,2,3, {a: 5}]
// func(arrs)
// console.log(arrs)
// direct comparision is not possible with object

