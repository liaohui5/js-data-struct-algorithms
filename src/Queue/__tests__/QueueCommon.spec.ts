import PriorityQueue from "../PriorityQueue";
import Queue from "../Queue";

describe('common Queue methods', () => {
  let queue: Queue<string>;
  let priorityQueue: PriorityQueue<string>;
  beforeEach(() => {
    queue = new Queue<string>();
    priorityQueue = new PriorityQueue<string>();
  });

  it('size', () => {
    // 队列大小(元素个数)
    'abcde'.split('').forEach((item, index) => {
      queue.enqueue(item);
      priorityQueue.enqueue(item, index);
    })

    expect(queue.size()).toBe(5);
    expect(priorityQueue.size()).toBe(5);
  });

  it('isEmpty', () => {
    // 队列是否为空
    expect(queue.isEmpty()).toBe(true);
    expect(priorityQueue.isEmpty()).toBe(true);
    queue.enqueue('a')
    priorityQueue.enqueue('a', 1)

    expect(queue.isEmpty()).toBe(false);
    expect(priorityQueue.isEmpty()).toBe(false);
  });

  it('head', () => {
    // 查看队列的第一个(只是查看, 并不执行出列操作)
    queue.enqueue('a')
    queue.enqueue('b')
    priorityQueue.enqueue('a', 2)
    priorityQueue.enqueue('b', 1)

    expect(queue.head()).toBe('a');
    expect(priorityQueue.head()).toBe('b');

    expect(queue.size()).toBe(2);
    expect(priorityQueue.size()).toBe(2);
  });

  it('clear', () => {
    // 清空队列
    'abcde'.split('').forEach((item, index) => {
      queue.enqueue(item);
      priorityQueue.enqueue(item, index);
    });

    expect(queue.size()).toBe(5);
    expect(priorityQueue.size()).toBe(5);
    queue.clear();
    priorityQueue.clear();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);

    expect(priorityQueue.size()).toBe(0);
    expect(priorityQueue.isEmpty()).toBe(true);
  });

  it('toString', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.toString()).toBe('[a,b,c]');
  });

});


