
interface StackInterface<T> {
  // static from<U>(items: Iterable<U>): StackInterface<U>;
  size(): number;
  isEmpty(): boolean;
  pop(): T | void;
  push(item: T): void;
  peek(): T | void;
  clear(): void;
  toString(): void;
}


