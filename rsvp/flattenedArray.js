
const arrayDeep = [1,2,3,[4,5,[6,7,8,[9,10]]]]

const flattenFunction = (arrayDeeps) => {
    const reversal  = arrayDeeps.reduce((memo, cur) => {
        return memo.concat(typeof cur === 'object'? flattenFunction(cur): cur)
    }, [])
    return reversal

} 

let nesteddata = [1,2,3,[4,5,6,7,[8,[9]]]]
// console.log(nesteddata)
// brutforce
const flattenFunction = (nestedArray) => {
    const result = []
    let stack = nestedArray
    const incrementer = 0
    while(stack.length > 0){
        console.log(stack)
        if(Array.isArray(nestedArray[incrementer])){
            stack.push(...nestedArray[incrementer])
            stack.splice(incrementer, 1)
        }else{
            result.push(nestedArray[incrementer])
            stack.splice(incrementer, 1)
        }
    }
    return result
}
console.log(flattenFunction(nesteddata))
console.log(flattenFunction(arrayDeep))





var test = {
    a: 'jack',
    b: {
        c: 'sparrow',
        d: {
            e: 'hahaha'
        }
    }
};

// Object

function traverseAndFlatten(currentNode, target, flattenedKey) {
    for (var key in currentNode) {
        if (currentNode.hasOwnProperty(key)) {
            var newKey;
            if (flattenedKey === undefined) {
                newKey = key;
            } else {
                newKey = flattenedKey + '.' + key;
            }

            var value = currentNode[key];
            if (typeof value === "object") {
                traverseAndFlatten(value, target, newKey);
            } else {
                target[newKey] = value;
            }
        }
    }
}

function flatten(obj) {
    var flattenedObject = {};
    traverseAndFlatten(obj, flattenedObject);
    return flattenedObject;
}