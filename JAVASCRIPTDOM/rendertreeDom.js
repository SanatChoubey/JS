
class Node {
    constructor(name) {
        this.name = name;
        this.innerHtml = '';
        this.children = []
    }
    appendChild (childNode) {
        this.children.push(childNode)
    }
}
class VDocument extends Node {
    constructor() {
        super('html')
    }
    createElement(nodeName) {
        return new Node(nodeName)
    }
   
    render() {
       
       const printTree = (node, count) => {
            let output = ''
            const spaces = ''.padStart(4 * count)
            output += `${spaces}<${node.name}>\n`
            if(node.innerHtml){
                output += `${spaces} ${''.padStart(4)}${node.innerHtml}\n`
            }
            for(let i = 0; i< node.children.length; i++) {
                output += printTree(node.children[i], i)
            }
            output += `${spaces}</${node.name}>\n`
            return output
       }
       console.log(printTree(this, 0))
    }
}
const vdocument  = new  VDocument()
const body = vdocument.createElement('body')
const div = vdocument.createElement('div')
div.innerHtml = 'Hello V Document'
body.appendChild(div)
vdocument.appendChild(body)
console.log(vdocument.render())
