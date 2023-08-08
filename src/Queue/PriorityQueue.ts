import QueueAbstract from "./QueueAbstract";

/**
 * 带有优先级的队列
 */
export default class PriorityQueue<T> extends QueueAbstract<PriorityQueueElement<T>> {
  /**
   * 创建带有优先级的队列元素
   * @param value T
   * @param priority
   * @returns PriorityQueueElement<T>
   */
  private createPriorityQueueElement(value: T, priority: number): PriorityQueueElement<T> {
    return {
      value,
      priority,
    };
  }

  /**
   * 入列: 按照元素的优先级入列
   * @param value
   * @param priority
   * @returns
   */
  /* @ts-ignore */
  public enqueue(value: T, priority: number): void {
    const element = this.createPriorityQueueElement(value, priority);

    // 插入到最前
    if (this.isEmpty() || priority < (this.head() as PriorityQueueElement<T>).priority) {
      this.items.unshift(element);
      return;
    }

    // 插入到最后
    const len = this.size();
    const tailItem = this.items[len - 1];
    if (tailItem.priority <= priority) {
      this.items.push(element);
      return;
    }

    // 在中间位置插入
    for (let i = 0; i < len; i++) {
      const current = this.items[i];
      if (current.priority > priority) {
        this.items.splice(i, 0, element);
        break;
      }
    }
  }

  /**
   * 查看第一个元素(值)
   * @returns
   */
  /* @ts-ignore */
  public head(): T | void {
    const element = super.head();
    if (element) {
      return element.value;
    }
  }

  /**
   * 出列
   * @returns
   */
  /* @ts-ignore */
  public dequeue(): T | void {
    const element = super.dequeue();
    if (element) {
      return element.value;
    }
  }
}
