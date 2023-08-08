/**
 * 用抽象类来实现一些逻辑高度重合的方法
 */
export default abstract class QueueAbstract<T> implements QueueInterface<T> {
  public items: T[] = [];

  /**
   * 查看队列的第一个元素(并不执行出列操作)
   * @returns T | undefined
   */
  public head() {
    return this.items.length > 0 ? this.items[0] : undefined;
  }

  /**
   * 队列的长度(元素的个数)
   * @returns number
   */
  public size(): number {
    return this.items.length;
  }

  /**
   * 队列是否为空
   * @returns boolean
   */
  public isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * 清空队列
   */
  public clear() {
    this.items = [];
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
    return this.items.shift();
  }

  /**
   *
   * @param args
   */
  abstract enqueue(value: T, priority?: number): void;
}
