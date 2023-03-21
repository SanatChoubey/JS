const arra = [5,4,9,8,6,1,2,3]
const bubbleSort = (arr) => {
    for(let i = 0; i< arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
console.log(bubbleSort(arra))
