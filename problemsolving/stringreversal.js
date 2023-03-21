
let str =  'sanat'
//  first approach
console.log(str.split('').reverse().join(''))
//  second approach
let  reversalString = ''
for(let i = 0; i< str.length; i++){
    reversalString= str[i] + reversalString;
}

console.log(reversalString)

