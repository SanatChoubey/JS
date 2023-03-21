const pair = [1,2,5,7,9]

const sumPair = (list, findSum) => {
    let includedArray = {

    };
    const data = {}
    for(el of list) {
        // console.log(el, findSum-el, includedArray[findSum - el], includedArray)
        if(includedArray[findSum - el]){

            return [el, findSum-el]
        }else{
            includedArray[el] = '7'
        }
    }
}
console.log(sumPair(pair, 7) ); 