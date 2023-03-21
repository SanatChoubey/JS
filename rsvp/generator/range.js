function* range(start, end){
    while(start<end) yield start++
}
for(let value of range(0,100)){
    console.log(value)
}