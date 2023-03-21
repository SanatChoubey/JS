// //  best way
// const binarySearch = (arr, findNumber, start, end) => {
//     if(start > end) {
//         return false;
//     }
//     let mid  =  Math.floor((start + end)/2)
//     if(arr[mid] === findNumber) return mid;
//     if(arr[mid] > findNumber) {
//         return binarySearch(arr, findNumber, start, mid - 1)
//     }else {
//         return binarySearch(arr, findNumber, mid + 1 , end)
//     }
// }
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 9;
// console.log(binarySearch(arr, x, 0, arr.length-1))

const binarySearchWHile = (arr, findNum) => {
    let start = 0;
    let end = arr.length -1;
    while(start <= end){
        
        let mid = Math.floor((start + end)/2)
        if(arr[mid] === findNum)return true
        if(arr[mid] > findNum ){
            end = mid - 1
        }
        if(arr[mid] < findNum){
            start = mid + 1
        }
    }
    return false
}
function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

const list = [1,2,3,4,5,6]
const x= 4
console.log(binarySearchWHile(list, x))