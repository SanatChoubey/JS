var a = "42";
var b = 42;

a == b;			// true
a === b;		// false

var a = "42";

var b = Number( a );

a;				// "42"
b;				// 42 -- the number!

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
// arrays are by default coerced to strings by simply joining all the values with commas (,) in between.
//  You might think that two arrays with the same contents would be == equal, but they're not:
a == c;		// true
b == c;		// true
a == b;		// false

var a = 41;
var b = "42";
var c = "43";

a < b;		// true
b < c;		// true

var a = 2;

foo();					// works because `foo()`
						// declaration is "hoisted"

function foo() {
	a = 3;

	console.log( a );	// 3

	var a;				// declaration is "hoisted"
						// to the top of `foo()`
}

console.log( a ); //2