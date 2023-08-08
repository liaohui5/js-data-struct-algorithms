import LinkedList from "../LinkedList";

describe('Linked common methods', () => {
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

  it('size', () => {
    // size 直接返回 linkedList 的 length 属性
    const ll = new LinkedList<string>();
    expect(ll.size()).toBe(0);

    ll.length = 1;
    expect(ll.size()).toBe(1);

    ll.length = 5;
    expect(ll.size()).toBe(5);
  });

  it('isEmpty', () => {
    // isEmpty 判断 linkedList 的 length 属性是否为 0
    const ll = new LinkedList<string>();
    expect(ll.isEmpty()).toBe(true);

    ll.length = 1;
    expect(ll.isEmpty()).toBe(false);

    ll.length = 5;
    expect(ll.isEmpty()).toBe(false);
  });

  it('append', () => {
    let len = linkedList.length;
    linkedList.append('append-item');
    expect(linkedList.tail!.value).toBe('append-item');
    expect(linkedList.length).toBe(len + 1);
  });

  it('prepend', () => {
    let len = linkedList.length;
    linkedList.prepend('prepend-item');
    expect(linkedList.head!.value).toBe('prepend-item');
    expect(linkedList.length).toBe(len + 1);
  });

  it('getNode', () => {
    expect(linkedList.getNode(0)!.value).toBe('a');
    expect(linkedList.getNode(1)!.value).toBe('b');
    expect(linkedList.getNode(2)!.value).toBe('c');
    expect(linkedList.getNode(3)).toBe(null);
    expect(linkedList.getNode(5)).toBe(null);
  });

  it('setNode', () => {
    linkedList.setNode(0, 'first-item');
    expect(linkedList.head!.value).toBe('first-item');

    const lastItemIndex = linkedList.length - 1;
    linkedList.setNode(lastItemIndex, 'last-item');
    expect(linkedList.tail!.value).toBe('last-item');
  });

  it('forEach', () => {
    let str = '';
    linkedList.forEach((item) => {
      str += item.value;
    });
    expect(str).toBe('abc');
  });

  it('indexOf', () => {
    expect(linkedList.indexOf('a')).toBe(0);
    expect(linkedList.indexOf('b')).toBe(1);
    expect(linkedList.indexOf('c')).toBe(2);

    // 没有找到对应链表节点值时候, 返回 -1
    expect(linkedList.indexOf('d')).toBe(-1);
    expect(linkedList.indexOf('e')).toBe(-1);
  });

  it('remove', () => {
    linkedList.remove('b');
    expect(linkedList.indexOf('b')).toBe(-1);
  });

  it('clear', () => {
    linkedList.clear();
    expect(linkedList.size()).toBe(0);
  });
});
