import Queue from "../Queue";

describe('Normal Queue', () => {
  it('enqueue', () => {
    const queue = new Queue<string>();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.items[0]).toBe('a');
    expect(queue.items[1]).toBe('b');
    expect(queue.items[2]).toBe('c');
  });

  it('from', () => {
    const q = Queue.from<string>('abc'.split(''));
    expect(q.items[0]).toBe('a');
    expect(q.items[1]).toBe('b');
    expect(q.items[2]).toBe('c');
  });

  it('dequeue', () => {
    const q = Queue.from<string>('abc'.split(''));
    let element: string = '';
    element = q.dequeue()!;
    expect(element).toBe('a');

    element = q.dequeue()!;
    expect(element).toBe('b');

    element = q.dequeue()!;
    expect(element).toBe('c');
  });
});
