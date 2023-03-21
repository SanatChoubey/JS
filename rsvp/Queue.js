
class Queue {
    constructor(){
        this.list = [];
    }
    add(record){
        this.list.unshift(record)
        return this.list
    }
    remove(){
        return this.list.pop()
    }
    peek(){
        return this.list[this.list.length - 1]
    }
}

const queue = new Queue();
console.log(queue.add(1));