// 链接节点接口
interface LinkedNode<T> {
  value: T;
  next: LinkedNode<T> | null;
}

// 双向链表节点接口
interface DoublyLinkedNode<T> extends LinkedNode<T> {
  prev: null | DoublyLinkedNode<T>;
  next: null | DoublyLinkedNode<T>;
}

// 链表接口
interface LinkedListInterface<T, P> {
  head: P | null;
  tail: P | null;
  length: number;
  size: () => number;
  isEmpty: () => boolean;
  insert: (position: number, value: T) => void;
  removeAt: (position: number) => void;
  toString: () => string;
  append: (value: T) => void;
  prepend: (value: T) => void;
  getNode: (position: number) => P | null;
  setNode: (position: number, value: T) => boolean;
  forEach: (handler: (item: P, position: number) => false | void) => void;
  indexOf: (value: T) => number;
  remove: (value: T) => void;
  clear: () => void;
}
