const arr = [1,2,3,4,5];
const arr1 = [2,4,6]
let arritfun = arr[Symbol.iterator]()
console.log(
    arritfun.next(),
    arritfun.next()
)
let arrwithbind = arr[Symbol.iterator].bind(arr1);
const ax = arrwithbind()
console.log(
    ax.next(),
    ax.next()
)

