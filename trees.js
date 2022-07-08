/*     10
  4      20   
2  8   17  170*/



class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {            
            let currentNode = this.root;
            while(true) {                
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;               
                }

            }
        }
    } 

    search(value) {
        const newNode = new Node(value);
        if(value === this.value) {
            return "Encontrado";
        }
        if(this.root === null) {
            this.root = newNode;
        } else {            
            let currentNode = this.root;
            while(true) {                
                if(value < currentNode.value){                    
                    currentNode.left = newNode;                    
                    currentNode = currentNode.left;
                    if(currentNode.value === value) {
                        return "Encontrado";
                    }
                
                } else {                    
                    currentNode.right = newNode;
                    currentNode = currentNode.right;
                    if(currentNode.value === value) {
                        return "Encontrado";
                    }
                    }
                                   
                }

            }
        }
}

const tree = new BinarySearchTree();

