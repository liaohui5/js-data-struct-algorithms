import LinkedList from "./LinkedList";

/**
 * 用抽象类来实现一些逻辑高度重合的方法
 */
export default class Queue<T> {
  public items: LinkedList<T> = new LinkedList<T>();

  /**
   * 查看队列的第一个元素(并不执行出列操作)
   * @returns T | undefined
   */
  public head() {
    if (this.items.isEmpty()) {
      return;
    }
    return this.items.getNode(0)!.value;
  }

  /**
   * 队列的长度(元素的个数)
   * @returns number
   */
  public size(): number {
    return this.items.size();
  }

  /**
   * 队列是否为空
   * @returns boolean
   */
  public isEmpty(): boolean {
    return this.items.size() === 0;
  }

  /**
   * 清空队列
   */
  public clear() {
    this.items.clear();
  }

  /**
   * 字符串序列化队列
   * @returns string
   */
  public toString() {
    return "[" + this.items.toString() + "]";
  }

  /**
   * 默认实现,可以覆盖(出列)
   * @returns
   */
  public dequeue() {
    if (this.items.isEmpty()) {
      return;
    }
    const headNode = this.items.head!;
    this.items.removeAt(0);
    return headNode.value;
  }

  /**
   * 入列
   * @param value T
   */
  public enqueue(value: T): void {
    this.items.append(value);
  }

  /**
   * 从其他可迭代数据中提取元素生成队列
   * @param items 队列元素
   * @returns
   */
  public static from<U>(items: Array<U> | Set<U>): Queue<U> {
    const queue = new Queue<U>();
    for (const item of items) {
      queue.enqueue(item);
    }
    return queue;
  }
}
