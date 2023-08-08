import LinkedListAbstract from "./LinkedListAbstract";

/**
 * 双向链表
 */
export default class DoublyLinkedList<T> extends LinkedListAbstract<T, DoublyLinkedNode<T>> {
  /**
   * 创建链表节点
   * @param value T
   * @returns P
   */
  public createNode(value: T): DoublyLinkedNode<T> {
    return {
      value,
      next: null,
      prev: null,
    };
  }

  /**
   * 插入链表节点
   * @param position number
   * @param value T
   */
  /* @ts-ignore */
  public insert(position: number, value: T): void {
    const node = this.createNode(value);

    // 如果链表为空,那么就不用管position的值,直接在最前面插入
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    const maxPosition = this.length;
    if (position === 0) {
      // 链表不为空, 插入位置为 0, 在最前方插入
      const headNode = this.head!;
      headNode.prev = node;
      node.next = headNode;
      this.head = node;
    } else if (position === maxPosition) {
      // 链表也不为空, 插入位置为最后一个节点的位置+1, 在最后面追加元素
      const tailNode = this.tail!;
      tailNode.next = node;
      node.prev = tailNode;
      this.tail = node;
    } else if (position > 0 && position < maxPosition) {
      // 链表也不为空, 插入位置不在最前/最后, 在中间插入元素
      const targetNode = this.getNode(position)!;
      node.prev = targetNode.prev;
      node.next = targetNode;
      targetNode.prev = node;
    } else {
      throw new RangeError("[insert]'position' out of range");
    }
    this.length++;
  }

  /**
   * 移除指定位置的链表节点
   * @param position number
   */
  public removeAt(position: number): void {
    if (this.isEmpty()) {
      return;
    }

    const maxPosition = this.length - 1;
    if (position === 0) {
      // 移除最前面的链表节点
      this.head = this.head!.next;
    } else if (position === maxPosition) {
      // 移除最后面的链表节点
      const tailPrevNode = this.tail!.prev!;
      tailPrevNode.next = null;
      this.tail = tailPrevNode;
    } else if (position > 0 && position < maxPosition) {
      // 移除中间的链表节点
      const targetNode = this.getNode(position)!;
      targetNode.prev!.next = targetNode.next;
      targetNode.next!.prev = targetNode.prev;
    } else {
      throw new RangeError("[removeAt]'position' out of range");
    }
    this.length--;
  }

  /**
   * 链表字符串序列化
   * @returns string
   */
  public toString(): string {
    let str = "";
    let separator = " <=> ";
    this.forEach((item) => {
      str += "[" + String(item.value) + "]" + separator;
    });
    return str.slice(0, -separator.length);
  }
}
