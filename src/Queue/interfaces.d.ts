// 队列接口
interface QueueInterface<T> {
  items: T[];                                     // 队列所有元素
  head: () => T | undefined;                      // 队列第一个
  size: () => number;                             // 队列总长度
  isEmpty: () => boolean;                         // 队列是否为空
  toString: () => string;                         // toString
  clear: () => void;                              // 清空队列
  enqueue: (value: T, priority?: number) => void; // 入列
  dequeue: () => T | void;                        // 出列
}

// 升序排序的优先级队列
// 优先级的队列与普通队列不同的地方在于:
// 元素不是根据执行的先后顺序排列, 而是根据优先级顺序来进行排列操作
interface PriorityQueueElement<T> {
  value: T;
  priority: number;
}
