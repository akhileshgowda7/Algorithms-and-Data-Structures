class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
     const newNode = {
        value:value,
        next:null
      }
      this.tail.next = newNode
      this.tail = newNode
      this.length = this.length + 1
      
      return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index,value){
        if(index>=this.insert){
           return this.append(value)
        }
        let newNode = new Node(value);

        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
        traverseToIndex(index){
         let tempIndex = 0;
         let currentNode = this.head
        
         while(tempIndex!=index){
            currentNode = currentNode.next
            tempIndex = tempIndex + 1;
         }
         return currentNode;
        }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode!=null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(2)
myLinkedList.prepend(4)
myLinkedList.append(10);
myLinkedList.append(11);
myLinkedList.insert(3,13)
// myLinkedList.printList()
console.log(myLinkedList.printList())