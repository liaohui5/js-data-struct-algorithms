import QueueAbstract from "./QueueAbstract";

/**
 * 最简单的队列
 */
export default class Queue<T> extends QueueAbstract<T> {
  /**
   * 从其他可迭代数据从提取元素生成队列
   * @param items 队列元素
   * @returns
   */
  public static from<U>(items: Iterable<U>): Queue<U> {
    const queue = new Queue<U>();
    for (const item of items) {
      queue.enqueue(item);
    }
    return queue;
  }

  /**
   * 入列
   * @returns Queue<T>
   */
  public enqueue(item: T) {
    this.items.push(item);
    return this;
  }
}
