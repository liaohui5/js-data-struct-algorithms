/**
 * 栈是一种受限的线性数据结构,相较于数组来说只能后进先出
 */
export default class Stack<T> implements StackInterface<T> {
  public items: T[] = [];

  /**
   * 从其他可迭代数据中解构元素构建栈
   * @param items
   * @returns Stack<T>
   */
  public static from<U>(items: Iterable<U>): Stack<U> {
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
    return this.items.pop();
  }

  /**
   * 入栈
   * @param item
   */
  public push(item: T): void {
    this.items.push(item);
  }

  /**
   * 查看栈顶元素(但是不会执行出栈操作)
   * @returns T | undefined
   */
  public peek(): T | void {
    return this.items[this.items.length - 1];
  }

  /**
   * 清栈
   */
  public clear(): void {
    this.items = [];
  }

  /**
   * 字符串序列化
   * @returns string
   */
  public toString(): string {
    return "[" + this.items.toString() + "]";
  }
}
