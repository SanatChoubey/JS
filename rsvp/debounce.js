// Debounce ----

function debounceFn (fn, delay){
    let timer;
    let context = this;
    return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(function(){
            fn.apply(context, args)
        }, delay)
    }
}

// Throtlle

function throtlleFn(fn, delay) {
    let flag = true
    let context = this
    return function(...arg){
        if(flag){
            fn.apply(this, arg)
            flag = false;
            setTimeout(() => {
                flag=true
            }, delay)
        }
    }
}