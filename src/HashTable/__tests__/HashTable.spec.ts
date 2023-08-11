import HashTable from "../HashTable";

describe('HashTable', () => {

  it('set/get', () => {
    const hashTable = new HashTable<string>();
    hashTable.set("a", "hello");
    hashTable.set("b", "world");
    const aValue = hashTable.get("a");
    const bValue = hashTable.get("b");
    expect(aValue).toBe("hello");
    expect(bValue).toBe("world");
  });


  it('delete', () => {
    const hashTable = new HashTable<string>();
    hashTable.set("a", "hello");
    hashTable.set("b", "world");
    hashTable.set("c", "hash table");
    const bValue = hashTable.delete("b");
    expect(bValue).toBe("world");
  });

  it('has', () => {
    const hashTable = new HashTable<string>();
    hashTable.set("a", "hello");
    hashTable.set("b", "world");

    const aValue = hashTable.has("a");
    const bValue = hashTable.has("b");
    const cValue = hashTable.has("c");

    expect(aValue).toBe(true);
    expect(bValue).toBe(true);
    expect(cValue).toBe(false);
  });

  it('clear', () => {
    const hashTable = new HashTable<string>();
    hashTable.set("a", "hello");
    hashTable.set("b", "world");
    expect(hashTable.get("a")).toBe("hello");
    expect(hashTable.get("b")).toBe("world");

    hashTable.clear();
    expect(hashTable.get("a")).toBe(undefined);
    expect(hashTable.get("a")).toBe(undefined);
  });

});



