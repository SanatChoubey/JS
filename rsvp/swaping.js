// const swapfun = (arr) => {
//     let left=0;
//     for(let i = 0; i < arr.length; i++) {
        
//         if(arr[i] > 0){
//             [arr[i], arr[left]] = [arr[left], arr[i]]
//             left++
//         }
//     }
//     return arr;
// }

// console.log('Arr', swapfun([1,2,4,0,6,0,7,0,0]))
const swapOne = (arr) => {
    for(let i =0; i< arr.length; i++) {
        for(let j = i+1;  j<arr.length; j++){
            if(arr[i] < arr[j] ){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr 
}
console.log('Arr', swapOne([1,2,4,0,6,0,7,0,0]))
// const swaptwo 