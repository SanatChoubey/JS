//  Bind Pollyfill

Function.prototype.mybind = function(...arg){
    let context = this;
    let argument = arg[0];
    return function (...arg2) {
        return  context.apply(argument, [...arg2])
    }
}
function callPolyBind(all) {
    console.log('this', this.name, this.city, all, )
}
var obj1 = {
    name: 'sanat',
    city: 'jabalpur'
}

callPolyBind.mybind(obj1, 'all')('all')

//  Promise pollyfill
Promise.myAllPromise = function(promiseList){
    const errorList = [];
    const responseList = [];
    return new Promise((resolve, reject)=>{
        promiseList.forEach( async function(item, i){
            try {
                const response = await item;
                responseList.push(response)
                if(responseList.length === promiseList.length){
                    resolve(responseList)
                }else  if(i = promiseList -1 ){
                    reject(errorList)
                }
            }catch(e){
                errorList.push(e)
                reject(errorList)
            }
        })
    })
}
const promiseK = [new Promise((resolve, reject) => { setTimeout(() =>{resolve('ok')}, 4000)}), new Promise((resolve, reject) => { setTimeout(() =>{resolve('ok')}, 4000)}), new Promise((resolve, reject) => { setTimeout(() =>{resolve('ok')}, 4000)}), new Promise((resolve, reject) => { setTimeout(() =>{resolve('ok')}, 4000)})];
Promise.myAllPromise(promiseK).then((resp)=>{
    console.log('response', resp)
}).catch((e)=>{
    console.log('e', e)
})