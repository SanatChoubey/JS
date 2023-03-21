const list = [0,1]
const fib = (n) => {
    if(n < 2) {
        return list.push(n)
    }
    return list.push(fib(n-1) + (n-2));
}
console.log(fib(10), list)

const fibIterativeSolution = (n) =>  {
    const list = []
    let fibData = 0;
    if(n == 0) {
        return 0
    }
    for(let i = 0; i<=n; i++){
        if(i === 0 || i ===1) {
            list.push(i)
        }else{
            list.push(list[i -1]+ list[i-2])
        }
    }
    return list
}
console.log('Free', fibIterativeSolution(10));