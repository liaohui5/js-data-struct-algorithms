import PriorityQueue from "../PriorityQueue";
import Queue from "../Queue";

// create queue and fill some data for test case
function createQueue(fillTotal: number = 0) {
  const queue = new Queue<number>();
  for (let i = 1; i <= fillTotal; i++) {
    queue.items.push(i);
  }
  queue.items.length = fillTotal;
  return queue;
}


describe('common Queue methods', () => {

  it('size', () => {
    // 队列大小(元素个数)
    const q1 = createQueue();
    expect(q1.size()).toBe(0);

    const q2 = createQueue(2);
    expect(q2.size()).toBe(2);
  });

  it('isEmpty', () => {
    // 队列是否为空
    const q1 = createQueue();
    expect(q1.isEmpty()).toBe(true);

    const q2 = createQueue(2);
    expect(q2.isEmpty()).toBe(false);

  });

  it('head', () => {
    // 查看队列的第一个(只是查看, 并不执行出列操作)
    const q = createQueue(3);
    expect(q.items.length).toBe(3);
    expect(q.head()).toBe(1);
    expect(q.items.length).toBe(3);
  });

  it('clear', () => {
    // 清空队列
    const q = createQueue(3);
    expect(q.items.length).toBe(3);

    q.clear();

    expect(q.items.length).toBe(0);
  });

  it('toString', () => {
    const q = createQueue(3);
    const s = q.toString();
    expect(s).toBe('[1,2,3]');
  });

});


