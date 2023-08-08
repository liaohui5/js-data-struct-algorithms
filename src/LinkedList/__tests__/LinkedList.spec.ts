import LinkedList from "../LinkedList";

describe('LinkedList', () => {
  let linkedList: LinkedList<string>;

  beforeEach(() => {
    linkedList = new LinkedList<string>();
    // 填充一些链表节点用于测试
    const aNode: LinkedNode<string> = {
      value: 'a',
      next: null,
    };
    const bNode: LinkedNode<string> = {
      value: 'b',
      next: null,
    };
    const cNode: LinkedNode<string> = {
      value: 'c',
      next: null,
    };
    aNode.next = bNode;
    bNode.next = cNode;
    linkedList.head = aNode;
    linkedList.tail = cNode;
    linkedList.length = 3;
  });

  it('createNode', () => {
    // 返回这样一个对象: { value: 'a', next: null }
    const node = linkedList.createNode('a');
    expect(node.value).toBe('a');
    expect(node.next).toBe(null);
  });

  it('insert: 链表为空的情况', () => {
    const ll = new LinkedList<string>();
    expect(ll.length).toBe(0);
    ll.insert(5, 'a'); // 忽略 position, 直接插入
    expect(ll.length).toBe(1);
    expect(ll.head!.value).toBe('a');
    expect(ll.tail!.value).toBe('a');
  });

  it('insert:链表不为空,在最前面插入节点', () => {
    // prepend
    const len = linkedList.length;
    linkedList.insert(0, 'x');
    expect(linkedList.head!.value).toBe('x');
    expect(linkedList.length).toBe(len + 1);
  });

  it('insert:链表不为空,在最后面插入节点', () => {
    // append
    const len = linkedList.length;
    linkedList.insert(linkedList.length, 'x');
    expect(linkedList.head!.value).toBe('a');
    expect(linkedList.tail!.value).toBe('x');
    expect(linkedList.length).toBe(len + 1);
  });

  it('insert:链表不为空,在中间位置插入节点', () => {
    const len = linkedList.length;
    linkedList.insert(1, 'x');
    expect(linkedList.head!.value).toBe('a');
    expect(linkedList.tail!.value).toBe('c');
    expect(linkedList.head!.next!.value).toBe('x');
    expect(linkedList.length).toBe(len + 1);
  });

  it('insert:链表不为空,传入的值超出范围,应该抛出异常', () => {
    const len = linkedList.length;
    expect(() => linkedList.insert(9, 'x')).toThrow(/out of range/);
    expect(linkedList.length).toBe(len);
  });


  it('removeAt:移除最前面的节点', () => {
    const len = linkedList.length;
    linkedList.removeAt(0);
    expect(linkedList.head!.value).toBe('b');
    expect(linkedList.length).toBe(len - 1);
  });

  it('removeAt:移除最后面的节点', () => {
    const len = linkedList.length;
    linkedList.removeAt(linkedList.length - 1);
    expect(linkedList.tail!.value).toBe('b');
    expect(linkedList.length).toBe(len - 1);
  });

  it('removeAt: 移除中间的节点', () => {
    const len = linkedList.length;
    linkedList.removeAt(1);
    expect(linkedList.head!.next!.value).toBe('c');
    expect(linkedList.length).toBe(len - 1);
  });

  it('removeAt:传入的 position 有误,应该报错', () => {
    const len = linkedList.length;
    expect(() => linkedList.removeAt(9)).toThrow(/out of range/);
    expect(linkedList.length).toBe(len);
  });

});
