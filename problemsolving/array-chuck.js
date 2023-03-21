function chuckFn(arr, len) {
    let chuck = [];
    let index = 0;
    while(index < arr.length){
        chuck.push(arr.slice(index, index + len))
        index = index + len
    }
    return chuck
}
console.log(chuckFn([1,2,3,4,5], 2))