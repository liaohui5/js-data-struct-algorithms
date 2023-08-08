const defaultHashTaleSize = 32;

/**
 * HashTable - 散列表(也叫哈希表)
 */
export default class HashTable<T> implements HashTableInterface<T> {
  public size: number = 0;
  public table: Array<HashTableNode<T>> = [];
  constructor(size = defaultHashTaleSize) {
    this.size = size;
    this.table = Array(size).fill(Object.create(null) as HashTableNode<T>);
  }

  /**
   * simple hash function
   * @param {string} key
   * @returns {number}
   */
  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size; // 取余数得到索引
  }

  /**
   * 设置 key-value 对
   * @param {string} key
   * @param {T} value
   */
  public set(key: string, value: T): void {
    const keyHash = this.hash(key);
    this.table[keyHash][key] = value;
  }

  /**
   * 根据 key 获取对应的 value
   * @param key
   * @returns {T | void}
   */
  public get(key: string): T | void {
    const keyHash = this.hash(key);
    if (!this.table[keyHash]) {
      return;
    }
    return this.table[keyHash][key];
  }

  /**
   * 删除键值对,返回删除的值
   * @param {string} key
   * @returns {T | void}
   */
  public delete(key: string): T | void {
    const keyHash = this.hash(key);
    if (!this.table[keyHash]) {
      return;
    }
    const deletedValue = this.table[keyHash][key];
    delete this.table[keyHash][key];
    return deletedValue;
  }

  /**
   * 是否包含某个 key
   * @param {string} key
   * @returns {boolean}
   */
  public has(key: string): boolean {
    const keyHash = this.hash(key);
    if (!this.table[keyHash]) {
      return false;
    }
    const node = this.table[keyHash];
    return Boolean(node && node[key]);
  }

  /**
   * 清空哈希表
   */
  public clear(): void {
    this.table = new Array(this.size);
  }
}

