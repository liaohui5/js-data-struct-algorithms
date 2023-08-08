/**
  * 用抽象类实现一些公共的方法
  */
export default abstract class LinkedListAbstract<T, P extends LinkedNode<T> | DoublyLinkedNode<T>> implements LinkedListInterface<T, P> {
  public head: null | P = null;
  public tail: null | P = null;
  public length: number = 0;

  // 派生类必须实现这些方法
  abstract createNode(value: T): P;
  abstract insert: (position: number, value: T) => void;
  abstract removeAt(position: number): void;
  abstract toString(): string;

  /**
   * 获取链表的长度(节点个数)
   * @returns number
   */
  public size(): number {
    return this.length;
  }

  /**
   * 链表中是否有节点
   * @returns boolean
   */
  public isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * 遍历链表中所有的节点, 并且将遍历的节点传入回调方法
   * @param handler CallableFunction
   * @returns void
   */
  public forEach(handler: (item: P, position: number) => false | void): void {
    let index: number = 0;
    let length: number = this.length;
    if (length === 0) {
      return;
    }

    // 为什么不判断 current && current.next 作为 while 的条件?
    // 这样判断的坏处是, 如果是环形链表, 就会无限死循环
    let current: P = this.head!;
    while (index < length) {
      const isContinue = handler(current, index);
      if (Object.is(isContinue, false)) {
        break;
      }
      /* @ts-ignore */
      current = current.next;
      index++;
    }
  }

  /**
   * 根据链表节点的位置获取节点
   * @param position number
   * @returns P | null
   */
  public getNode(position: number): P | null {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let node: P | null = null;
    this.forEach((item, index) => {
      if (index === position) {
        node = item;
        return false;
      }
    });
    return node;
  }

  /**
   * 更新指定位置的节点的 value
   * @param position number
   * @param value T
   */
  public setNode(position: number, value: T): boolean {
    const node = this.getNode(position);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  /**
   * 根据链表节点的 value 获取节点的位置, 没有找到返回-1
   * @param value T
   * @returns number
   */
  public indexOf(value: T): number {
    let i = -1;
    this.forEach((item, index) => {
      if (value === item.value) {
        i = index;
        return false;
      }
    });
    return i;
  }

  /**
   * 根据链表节点的 value 来查找节点,然后移除
   * @param value T
   */
  public remove(value: T): void {
    const position = this.indexOf(value);
    position !== -1 && this.removeAt(position);
  }

  /**
   * 清空链表
   */
  public clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * 在链表最前面插入链表节点
   * @param value T
   */
  public prepend(value: T): void {
    this.insert(0, value);
  }

  /**
   * 在链表的最后面追加链表节点
   * @param value T
   */
  public append(value: T): void {
    if (this.isEmpty()) {
      this.insert(0, value);
    } else {
      this.insert(this.length, value);
    }
  }
}
