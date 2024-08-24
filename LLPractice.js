class LinkedListNode {
    constructor() {
        this.value = value;
        this.next = next; 
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
        this.tail = null;
    }

    read(index) {
        let current = this.head;
       for (let i = 0; i <= index; i++) {
        current = this.head.next; 
       }
       return current;
    }

    addToHead(value) { 
        const newNode = new LinkedListNode (value, null);
        newNode.next = this.head; 
        this.head = newNode;
    }

    removeFromHead() { 
        if (this.head) this.head = this.head.next;
    }

    addToTail(value) {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = value;

    }

    removeFromTail() {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current = null;
    }

    addAtIndex(value, index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current = value;
    }

    removeFromIndex(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next; 
        }
        current = null;
    }
}