import PriorityQueue from "../PriorityQueue";

describe("Priority Queue", () => {
  it('enqueue', () => {
    const pq = new PriorityQueue<string>();
    pq.enqueue('a', 1);
    pq.enqueue('c', 3);
    pq.enqueue('e', 5);
    pq.enqueue('b', 2);
    pq.enqueue('d', 4);
    expect(pq.items[0].value).toBe('a');
    expect(pq.items[1].value).toBe('b');
    expect(pq.items[2].value).toBe('c');
    expect(pq.items[3].value).toBe('d');
    expect(pq.items[4].value).toBe('e');
  });

  it('dequeue', () => {
    const pq = new PriorityQueue<string>();
    pq.enqueue('a', 1);
    pq.enqueue('e', 5);
    pq.enqueue('c', 3);
    pq.enqueue('b', 2);
    pq.enqueue('d', 4);
    expect(pq.dequeue()).toBe('a');
    expect(pq.dequeue()).toBe('b');
    expect(pq.dequeue()).toBe('c');
    expect(pq.dequeue()).toBe('d');
    expect(pq.dequeue()).toBe('e');
  });
});

