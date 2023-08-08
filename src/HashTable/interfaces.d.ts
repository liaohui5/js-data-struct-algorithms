interface HashTableInterface<T> {
  size: number;
  table: Array<HashTableNode<T>>;
  // hash: (key: string) => number;
  set: (key: string, value: T) => void;
  get: (key: string) => T | void;
  has: (key: string) => boolean;
  delete: (key: string) => T | void;
  clear: () => void;
}

interface HashTableNode<T> {
  [key: string]: T,
}
