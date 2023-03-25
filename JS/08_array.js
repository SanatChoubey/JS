// var a = [ ];

// a[0] = 1;
// a["foobar"] = 2;

// a.length;		// 1
// a["foobar"];	// 2
// a.foobar;		// 2
// var a = [ ];

// a["13"] = 42;

// a.length; // 14

// var a = new Array( 1, 2, 3 );
// a; // [1, 2, 3]

// var b = [1, 2, 3];
// b; // [1, 2, 3]
// Note: The Array(..) constructor does not require the new keyword in front of it. 
// If you omit it, it will behave as if you have used it anyway. So Array(1,2,3) is the same outcome as new Array(1,2,3)
// var a = new Array( 3 );

// a.length; // 3
// a;
// var a = Array.apply( null, { length: 3 } );
// a; // [ undefined, undefined, undefined ]

// var a = [1,2,3];

// a.toString(); 

// JSON.stringify( 42 );	// "42"
// JSON.stringify( "42" );	// ""42"" (a string with a quoted string value in it)
// JSON.stringify( null );	// "null"
// JSON.stringify( true );	// "true"