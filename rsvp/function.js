// function with this
function abb () {
    this.a = 5
    console.log(this.a)
    const context  =  this;
    setTimeout(function(){
        console.log( context.a)
    }, 2000)
    return () => {
        console.log('a->',this)
    }
}
abb()()
const obc = () => {
    
    // this['a'] = 5
    // console.log(this)
    return () => {
        console.log(this)  
    }
}
const b = obc()
b()

