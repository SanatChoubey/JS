
let i = 0;

const next = () =>({
    value: i++,
    done: i === 10
})
const obj = {
    [Symbol.iterator](){
        return {
            next
        }
    }
}
for(value of obj){
    console.log(value)
}