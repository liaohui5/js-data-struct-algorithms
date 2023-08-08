import HashTable from "../HashTable";

describe('HashTable', () => {

  let hashTable: HashTable<string>;
  beforeEach(() => {
    hashTable = new HashTable<string>();
  });


  it('set/get', () => {
    hashTable.set("a", "hello");
    hashTable.set("b", "world");
    const aValue = hashTable.get("a");
    const bValue = hashTable.get("b");
    expect(aValue).toBe("hello");
    expect(bValue).toBe("world");
  });


  it('delete', () => {
    hashTable.set("a", "hello");
    hashTable.set("b", "world");
    hashTable.set("c", "hash table");
    const bValue = hashTable.delete("b");
    expect(bValue).toBe("world");
  });

  it('has', () => {
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
    hashTable.set("a", "hello");
    hashTable.set("b", "world");
    expect(hashTable.get("a")).toBe("hello");
    expect(hashTable.get("b")).toBe("world");

    hashTable.clear();
    expect(hashTable.get("a")).toBe(undefined);
    expect(hashTable.get("a")).toBe(undefined);
  });

});



