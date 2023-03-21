const longestSubString = (s) => {
    let arrayString = s.split('')
    let left = 0;
    let alphaObject = {};
    return  arrayString.reduce((memo, currentAlphabet, idx)=>{
        left = alphaObject[currentAlphabet] >= left ? alphaObject[currentAlphabet] + 1 : left;
        alphaObject[currentAlphabet] = idx;
        return Math.max(memo, idx - left + 1)
    },0)
}
console.log(longestSubString("abcabcbb"))