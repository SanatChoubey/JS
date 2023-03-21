
Array.prototype.myreduce = function(cb, args){
    if(arguments.length  === 0) {
        throw new Error('required 2 argument but got 0')
    }
    if(typeof cb !== 'function') {
        throw new TypeError('cb is not a function!')
    }
    var state = args ?  args: this[0]
    for(var i = 0; i < this.length; i++) {
        cb(state, this[i], i, this )
    }
    return state
    
}