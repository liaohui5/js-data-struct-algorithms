import LinkedList from "./LinkedList";

/**
 * 栈是一种受限的线性数据结构,相较于数组来说只能后进先出
 * 这个与 Stack 目录中不同的是, 这个是基于链表实现
 */
export default class Stack<T> {
  private items: LinkedList<T> = new LinkedList<T>();

  /**
   * 从其他可迭代数据中解构元素构建栈
   * @param items
   * @returns Stack<T>
   */
  public static from<U>(items: Array<U> | Set<U>): Stack<U> {
    const stack = new Stack<U>();
    for (const item of items) {
      stack.push(item);
    }
    return stack;
  }

  /**
   * 获取栈的总长度
   * @returns number
   */
  public size(): number {
    return this.items.length;
  }

  /**
   * 栈是否为空
   * @returns boolean
   */
  public isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * 出栈
   * @returns T | undefined
   */
  public pop(): T | void {
    if (this.items.isEmpty()) {
      return;
    }
    const tailNode = this.items.tail!;
    this.items.removeAt(this.items.length - 1);
    return tailNode.value;
  }

  /**
   * 入栈
   * @param item
   * @returns Stack<T>
   */
  public push(item: T): Stack<T> {
    this.items.append(item);
    return this;
  }

  /**
   * 查看栈顶元素(但是不会执行出栈操作)
   * @returns T | undefined
   */
  public peek(): T | void {
    if (this.isEmpty()) {
      return;
    }
    return this.items.tail!.value;
  }

  /**
   * 清栈
   * @returns Stack<T>
   */
  public clear(): Stack<T> {
    this.items.clear();
    return this;
  }

  /**
   * 字符串序列化
   * @returns string
   */
  public toString(): string {
    return "[" + this.items.toString() + "]";
  }
}
