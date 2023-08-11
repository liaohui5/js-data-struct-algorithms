import BinarySearchTree from "../BinarySearchTree";

// 创建节点
function createNode(key: number): TreeNode<string> {
  return {
    key,
    value: String(key),
    left: null,
    right: null
  }
}

// 填充节点
//          5
//     3         6  
// 1
function createBST() {
  const bst = new BinarySearchTree<string>();
  const node5 = createNode(5);
  const node3 = createNode(3);
  const node6 = createNode(6);
  const node1 = createNode(1);
  node5.left = node3;
  node3.left = node1;
  node5.right = node6;
  bst.rootNode = node5;
  return bst;
}

// 填充测试删除需要的节点, createBST 节点太少无法测试删除方法的所有情况
// 而测试其他的方法又不需要这么多的数据, 否则影响测试用例的性能
// 如果阅读/调试源码, 建议看这个图来调试, 程序走到哪个步骤了
// https://raw.githubusercontent.com/liaohui5/images/main/images/20230710224450.png
function createRemoveCaseBST() {
  const bst = new BinarySearchTree<string>();
  const n11 = createNode(11);
  bst.rootNode = n11;

  const n7 = createNode(7);
  const n15 = createNode(15);
  n11.left = n7;
  n11.right = n15;

  const n5 = createNode(5);
  const n9 = createNode(9);
  const n13 = createNode(13);
  const n20 = createNode(20);
  n7.left = n5;
  n7.right = n9;
  n15.left = n13;
  n15.right = n20;

  const n3 = createNode(3);
  const n8 = createNode(8);
  const n10 = createNode(10);
  const n12 = createNode(11);
  const n14 = createNode(14);
  const n18 = createNode(18);
  const n25 = createNode(25);
  n5.left = n3;
  n9.left = n8;
  n9.right = n10;
  n13.left = n12;
  n13.right = n14;
  n20.left = n18;
  n20.right = n25;

  const n19 = createNode(19);
  n18.right = n19;
  return bst;
}

describe('BinarySearchTree', () => {
  it('createTreeNode', () => {
    const bst = new BinarySearchTree<string>();
    const node = bst.createTreeNode(1, 'a');
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
    expect(node.value).toBe('a');
    expect(node.key).toBe(1);
  });

  it('keys', () => {
    const bst = createBST();
    const keys = bst.keys();
    expect(keys.length).toBe(4);
    expect(keys.includes(5)).toBe(true);
    expect(keys.includes(3)).toBe(true);
    expect(keys.includes(6)).toBe(true);
    expect(keys.includes(1)).toBe(true);
  });

  it('values', () => {
    const bst = createBST();
    const values = bst.values();
    expect(values.length).toBe(4);
    expect(values.includes('5')).toBe(true);
    expect(values.includes('3')).toBe(true);
    expect(values.includes('6')).toBe(true);
    expect(values.includes('1')).toBe(true);
  })

  it('hasKey/hasValue', () => {
    const bst = createBST();
    expect(bst.hasKey(1)).toBe(true);
    expect(bst.hasValue('6')).toBe(true);
  });

  it('insert:没有根节点的情况', () => {
    const bst = new BinarySearchTree<string>();
    expect(bst.rootNode).toBeNull();
    bst.insert(1, 'a');
    expect(bst.rootNode!.key).toBe(1);
    expect(bst.rootNode!.value).toBe('a');
  });

  it('insert:有根节点,但是没有子节点', () => {
    const bst = new BinarySearchTree<string>();
    const key = 5;
    const leftKey = key - 1;
    const rightKey = key + 1;
    bst.rootNode = {
      key,
      value: 'a',
      left: null,
      right: null
    };

    expect(bst.rootNode.left).toBeNull();
    expect(bst.rootNode.right).toBeNull();

    bst.insert(leftKey, 'b');
    expect(bst.rootNode.left!.key).toBe(leftKey);
    expect(bst.rootNode.left!.value).toBe('b');

    bst.insert(rightKey, 'c');

    expect(bst.rootNode.right!.key).toBe(rightKey);
    expect(bst.rootNode.right!.value).toBe('c');
  });

  it('insert:有根节点,且有子节点', () => {
    const bst = new BinarySearchTree<string>();
    const node3 = createNode(3);
    const node6 = createNode(6);
    const node5 = createNode(5);
    node5.left = node3;
    node5.right = node6;
    bst.rootNode = node5;

    bst.insert(2, 'insert-2');
    bst.insert(8, 'insert-8');
    expect(node3.left.key).toBe(2);
    expect(node3.left.value).toBe('insert-2');

    expect(node6.right.key).toBe(8);
    expect(node6.right.value).toBe('insert-8');
  });

  it('foreach:广度优先遍历', () => {
    const bst = createBST();
    let str = "";
    bst.forEach((node) => {
      str += node.value;
    });
    expect(str).toBe('5361');
  });

  it('traverseNodes: 先/中/后序遍历', () => {
    const bst = createBST();

    // 先序遍历
    let str = "";
    bst.traverseNodes('pre', (node) => {
      str += node.value;
    });
    expect(str).toBe('5316');

    // 中序遍历
    str = "";
    bst.traverseNodes('in', (node) => {
      str += node.value;
    });
    expect(str).toBe('1356');

    // 后序遍历
    str = "";
    bst.traverseNodes('post', (node) => {
      str += node.value;
    });
    expect(str).toBe('1365');
  });

  it('findMin/findMax', () => {
    const bst = createBST();
    const minNode = bst.findMin()!;
    const maxNode = bst.findMax()!;
    expect(minNode.key).toBe(1);
    expect(maxNode.key).toBe(6);
  });

  it('find', () => {
    const bst = createBST();
    const findedNode = bst.find(5)!;
    expect(findedNode.key).toBe(5);
  });

  it('remove:删除没有任何子节点的叶子节点', () => {
    const bst = createRemoveCaseBST();
    const beforeKeys = bst.keys();
    const targetKey = 3;
    expect(beforeKeys.includes(targetKey)).toBe(true);

    bst.remove(targetKey);
    const afterKeys = bst.keys();
    expect(afterKeys.includes(targetKey)).toBe(false);
    expect(afterKeys.length).toBe(beforeKeys.length - 1);
  });

  it('remove:删除的节点有一个left节点,没有 right 节点', () => {
    const bst = createRemoveCaseBST();
    const beforeKeys = bst.keys();
    const targetKey = 5;
    expect(beforeKeys.includes(targetKey)).toBe(true);

    bst.remove(targetKey);
    const afterKeys = bst.keys();
    expect(afterKeys.includes(targetKey)).toBe(false);
    expect(afterKeys.length).toBe(beforeKeys.length - 1);
  });


  it('remove:删除的节点有一个 right 节点, 没有 left 节点', () => {
    const bst = createRemoveCaseBST();
    const beforeKeys = bst.keys();
    const targetKey = 18;
    expect(beforeKeys.includes(targetKey)).toBe(true);

    bst.remove(targetKey);
    const afterKeys = bst.keys();
    expect(afterKeys.includes(targetKey)).toBe(false);
    expect(afterKeys.length).toBe(beforeKeys.length - 1);
  });

  it('remove:删除的节点既有 left 也有 right 节点', () => {
    const bst = createRemoveCaseBST();
    const beforeKeys = bst.keys();
    const targetKey = 20;
    expect(beforeKeys.includes(targetKey)).toBe(true);

    bst.remove(targetKey);
    const afterKeys = bst.keys();
    expect(afterKeys.includes(targetKey)).toBe(false);
    expect(afterKeys.length).toBe(beforeKeys.length - 1);
  });
});
