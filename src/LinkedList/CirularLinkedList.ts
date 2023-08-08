import DoublyLinkedList from "./DoublyLinkedList";
import LinkedList from "./LinkedList";

/**
 * 单向环形链表
 */
export class CirularLinkedList<T> extends LinkedList<T> {
  /**
   * 让最后一个链表节点的 next 指向第一个节点
   */
  private setTailNext() {
    if (this.tail && this.length > 1) {
      this.tail!.next = this.head;
    }
  }

  /**
   * 调用父类的 insert 方法后, 修改 tail 节点的 next 指向
   */
  public insert(position: number, value: T): void {
    super.insert(position, value);
    this.setTailNext();
  }

  /**
   * 调用父类的 removeAt 方法后, 修改 tail 节点的 next 指向
   */
  public removeAt(position: number): void {
    super.removeAt(position);
    this.setTailNext();
  }
}

/**
 * 双向环形链表
 */
export class DoublyCirularLinkedList<T> extends DoublyLinkedList<T> {
  /**
   * 让最后一个链表节点的 next 指向第一个节点
   */
  private setTailNext() {
    if (this.tail && this.length > 1) {
      this.tail!.next = this.head;
    }
  }

  /**
   * 让第一个链表节点的 prev 指向最后一个节点
   */
  private setHeadPrev() {
    if (this.head && this.length > 1) {
      this.head!.prev = this.tail;
    }
  }

  /**
   * 调用父类的 insert 方法后, 修改 tail 节点的 next 指向, head 节点的 prev 指向
   */
  public insert(position: number, value: T): void {
    super.insert(position, value);
    this.setTailNext();
    this.setHeadPrev();
  }

  /**
   * 调用父类的 removeAt 方法后, 修改 tail 节点的 next 指向, head 节点的 prev 指向
   */
  public removeAt(position: number): void {
    super.removeAt(position);
    this.setTailNext();
    this.setHeadPrev();
  }
}
