interface TreeNode<T> {
  key: number;
  value: T;
  left: TreeNode | null;
  right: TreeNode | null;
}

interface BinarySearchTreeInterface<T> {
  rootNode: TreeNode<T> | null;
  createTreeNode(key: number, value: T): TreeNode<T>;
  keys(): Array<number>;
  values(): Array<T>;
  hasKey(key: number): boolean;
  hasValue(value: T): boolean;
  insert(): void;
  forEach(handler: (item: TreeNode<T>) => void | false): void;
  traversePreOrder(handler: (item: TreeNode<T>) => void): void;
  traverseInOrder(handler: (item: TreeNode<T>) => void): void;
  traversePostOrder(handler: (item: TreeNode<T>) => void): void;
  findMin(): TreeNode<T>;
  findMax(): TreeNode<T>;
  find: (key: number) => boolean;
  remove: (key: number) => boolean;
}
