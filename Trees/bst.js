class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
     if(this.root ==null){
        this.root = value;
     }

    }
    lookup(value){

    }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);