//-------------- function declaration ------------
// function abc() {

// }

// ----------------function Expression ------------
// const fucn = function () {

// } 
// function caller(){
//     console.log(a)
// }
// -------------- function invoking  ----------------
 // caller() 
// let a = 10;
// caller() // 10

// --------------- Fat Arrow Fn ---------------

// const callerFat =  () => {
//     console.log(a)
// }
// callerFat() // 10

// ---------------- constructor function ------------

// function CreateObject(name, gender) {
//     this.name = name;
//     this.gender = gender;
//     return this
// }
// const user = new CreateObject('sanat', 24)
// console.log(CreateObject.apply({name: 'sanats', genderd:'45'},['anem', 23]))


// -----------------there is an big gotcha --------------
// regular fn vs fat arrow function
//  1- argument keyword will not work in fat arrow function
// 2-  hoisting in fat arrow
// 3 - dynamic this in regular fn and fat arrow have outer scope
//  no calling method in => i.e call, bind, apply



