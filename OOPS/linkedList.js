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
        if(index>=this.length){
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
    remove(index){
        if(index==this.length){
           const newTail =  this.traverseToIndex(index-1)
           this.tail = newTail
           this.length--
           return this 
        }
        if(index == 0){
            this.head = this.head.next;
            this.length--
           return this 
        }

        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next
         leader.next = unwantedNode.next
         this.length-- 
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
    reverse(){
        if(!this.head.next){
            return this.head
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(2)
myLinkedList.prepend(4)
myLinkedList.append(14);
myLinkedList.append(11);
myLinkedList.insert(3,13)
console.log(myLinkedList.printList())
myLinkedList.remove(6)
myLinkedList.reverse()
// myLinkedList.printList()
console.log(myLinkedList.printList())