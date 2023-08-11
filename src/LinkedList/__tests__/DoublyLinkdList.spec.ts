import DoublyLinkedList from "../DoublyLinkedList";

function createDoublyLinkedList() {
  const dll = new DoublyLinkedList<string>();
  const aNode: DoublyLinkedNode<string> = {
    value: 'a',
    next: null,
    prev: null,
  };
  const bNode: DoublyLinkedNode<string> = {
    value: 'b',
    next: null,
    prev: null,
  };
  const cNode: DoublyLinkedNode<string> = {
    value: 'c',
    next: null,
    prev: null,
  };
  aNode.next = bNode;
  bNode.next = cNode;
  bNode.prev = aNode;
  cNode.prev = bNode;
  dll.head = aNode;
  dll.tail = cNode;
  dll.length = 3;
  return dll;
}


describe('DoublyLinkedList', () => {
  it('createNode', () => {
    const dll = new DoublyLinkedList<string>();
    const node = dll.createNode('x');
    expect(node.value).toBe('x');
  });

  it('insert:当链表为空的时候', () => {
    const doublyLinkedList = new DoublyLinkedList<string>();
    const len = doublyLinkedList.length;
    doublyLinkedList.insert(5, 'x'); // 忽略 position,直接插入
    expect(doublyLinkedList.head!.value).toBe('x');
    expect(doublyLinkedList.tail!.value).toBe('x');
    expect(doublyLinkedList.length).toBe(len + 1);
  });

  it('insert:链表不为空,在最前面插入节点', () => {
    const dll = createDoublyLinkedList();
    const len = dll.length;
    const insertValue = 'insert-value';
    dll.insert(0, insertValue);

    const headNode = dll.head!;
    expect(headNode.value).toBe(insertValue);
    expect(headNode.next!.value).toBe('a');
    expect(headNode.next!.prev!.value).toBe(insertValue);
    expect(dll.length).toBe(len + 1);
  });

  it('insert:链表不为空,在最后面插入节点', () => {
    const dll = createDoublyLinkedList();
    const len = dll.length;
    const insertValue = 'insert-value';
    dll.insert(dll.length, insertValue);

    const tailNode = dll.tail!;
    expect(tailNode.value).toBe(insertValue);
    expect(tailNode.prev!.value).toBe('c');
    expect(tailNode.prev!.next!.value).toBe(insertValue);
    expect(dll.length).toBe(len + 1);
  });

  it('insert:超出链表范围', () => {
    const dll = createDoublyLinkedList();
    const len = dll.length;
    expect(() => dll.insert(11, 'x')).toThrow(/out of range/);
    expect(dll.length).toBe(len);
  });


  it('removeAt:移除最前面的节点', () => {
    const dll = createDoublyLinkedList();
    const len = dll.length;
    dll.removeAt(0);
    expect(dll.head!.value).toBe('b');
    expect(dll.length).toBe(len - 1);
  });

  it('removeAt:移除最后面的节点', () => {
    const dll = createDoublyLinkedList();
    const len = dll.length;
    dll.removeAt(dll.length - 1);
    expect(dll.tail!.value).toBe('b');
    expect(dll.length).toBe(len - 1);
  });

  it('removeAt:移除中间的节点', () => {
    const dll = createDoublyLinkedList();
    const len = dll.length;
    dll.removeAt(1);
    expect(dll.head!.next!.value).toBe('c');
    expect(dll.length).toBe(len - 1);
  });

  it('removeAt:超出范围', () => {
    const dll = createDoublyLinkedList();
    const len = dll.length;
    expect(() => dll.removeAt(5)).toThrow(/out of range/);
    expect(dll.length).toBe(len);
  });
});
