// Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// Object.prototype.prototype
// undefined
// let obx = {}
// undefined
// obx.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// obx.__proto__.__proto__
// null

// let date = new Date()
// undefined
// date.__proto__
// {constructor: ƒ, toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, …}
// date.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// date.__proto__.__proto__.__proto__
// null

// let arr  = []
// undefined
// arr.__proto__
// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
// arr.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// arr.__proto__.__proto__.__proto__
// null

// var abs = '123'
// undefined
// abs.__proto__
// String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
// abs.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// abs.__proto__.__proto__.__proto__
// null

// Object.getPrototypeOf( a );
// And you'll notice that object reference is what we'd expect:

// Object.getPrototypeOf( a ) === Foo.prototype; // true
// Most browsers (not all!) have also long supported a non-standard alternate way of accessing the internal [[Prototype]]:

// a.__proto__ === Foo.prototype; // true