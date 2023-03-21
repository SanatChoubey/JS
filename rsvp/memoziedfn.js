
const memoInitialized = (x) => {
    const memoData = {};
    return () => {
     if(memoData[x]){
        return memoData[x]
     }
     memoData[x] = x * 2;
     return   memoData[x]
    }
}
