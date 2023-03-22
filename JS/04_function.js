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

// "use strict";

// function foo() {
// 	// this code is strict mode

// 	function bar() {
// 		// this code is strict mode
// 	}
// }

// this code is strict mode

// function foo() {
// 	"use strict";

// 	// this code is strict mode

// 	function bar() {
// 		// this code is strict mode
// 	}
// }
// function foo() {
// 	"use strict";	// turn on strict mode
// 	a = 1;			// `var` missing, ReferenceError
// }

// foo();

// this code is not strict mode
// -----------------there is an big gotcha --------------
// regular fn vs fat arrow function
//  1- argument keyword will not work in fat arrow function
// 2-  hoisting in fat arrow
// 3 - dynamic this in regular fn and fat arrow have outer scope
//  no calling method in => i.e call, bind, apply



