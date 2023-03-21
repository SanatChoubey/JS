class Nodes {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        this.head =  new Nodes(data, this.head);
    }
    size(){
        let counter = 0;
        let node = this.head;
        while(node){
            counter ++;
            node = node.next;
        }
        return counter
    }
    getFirst(){
        return this.head
    }
    getLast(){
        let node = this.head;
        if(!node){
            return null

        }
        while(node){
            if(!node.next){
                return node
            }
            node =  node.next;
        }
    }
    clear(){
        this.head = null
        
    }
    removeFirst(){
        if(!this.head){
            return
        }
        this.head = this.head.next
    }
}
const nodeOne = new Nodes(5)
const list = new LinkedList();
list.head = nodeOne
list.insertFirst(15)
list.insertFirst(50)
console.log(list)