class Node {
  constructor(value, next = null, prev = null) {
    this.value = value,
    this.next = next,
    this.prev = prev;
  }
}

class LinkedList {
  constructor(value) {
    this.data = {};
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }
  
  append(value) {
    if (this.length === 0) {
    const newNode = new Node(value,null, null);
      this.head = newNode
      this.tail = this.head
      this.length++
      return this
    }
    const newNode = new Node(value,null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    this.head = new Node(value, this.head, null)
    this.length++
    return this;
  }

  look(node, index) {
    console.log("iteration no. ",index, node);
    if (index === 0) {
      console.log("rached index ",index, node);
      return node;
    }
    else if (node.next) {
      console.log("iteration no. ",index,node);
      this.look(node.next, (index - 1))
    }
    else throw new Error('invalid Index')
  }

  // insert(index, value) {
  //   let prevNode = this.head;
  //   let currentNode = this.head?.next;

  //   for (let i = 0; i <= index; i++){
  //     if (index === i) {
  //       console.log("FOund: ",currentNode, "Prev Node: ",prevNode);
  //       let newNode = new Node(value, currentNode.next)
  //       prevNode.next = newNode
  //     }
  //     prevNode = currentNode
  //     currentNode = currentNode.next
  //    }
  // }

  insert(index, value) {
    let prevNodeBeforeIndex = this.triversToIndex(index - 1)
    
    let newNode = new Node(value, prevNodeBeforeIndex.next, prevNodeBeforeIndex)
    let nodeAtIndex = prevNodeBeforeIndex.next
    prevNodeBeforeIndex.next = newNode
    newNode.next = nodeAtIndex
    this.length++
  }

  remove(index) {
    let prevNodebeforeIndex = this.triversToIndex(index - 1);

    let nodeAtIndex = prevNodebeforeIndex.next;

    prevNodebeforeIndex.next = nodeAtIndex.next;
    this.length--;
  }
  
  triversToIndex(index) {
    let currentNode = this.head
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  reverse() {
    let nodes = []
    let currentNode = this.head
    
    for (let i = 0; i < this.length; i++) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next
    }
    nodes.reverse()
    
    this.head = {}
    this.tail = {}
    this.length = 0
    console.log(nodes,);
    this.print()
    for (let i = 0; i < nodes.length; i++) {
      this.append(nodes[i])
    }
  }

  // delete(index) {
  //   let count = 0;
  //   let currentNext = this.head;
  //   while (index >= count) {
  //     count++;
  //     if ((index - 1) === count) {
  //     }

  //   }
  // }
  
  print() {
    console.log('====================================');
    console.log('DATA: ', this.data, '\nTAIL: ', this.tail, '\nHEAD: ', this.head);
  }
  
}


let ll = new LinkedList('First');

ll.append('secand')


ll.append('third')

// ll.append('forth')

// ll.print();

ll.prepend('start')
ll.print()
ll.reverse()

// ll.print()


// ll.insert(1, "inserted")
// ll.insert(2, "inserted2")
// ll.remove(2)
ll.print()
