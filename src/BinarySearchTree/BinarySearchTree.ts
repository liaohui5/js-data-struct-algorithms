/**
 * 二叉搜索树
 */
export default class BinarySearchTree<T> {
  public rootNode: TreeNode<T> | null = null

  /**
   * 获取所有节点的 key 并返回
   * @returns {Array<number>}
   */
  public keys(): Array<number> {
    const keys: number[] = [];
    if (this.rootNode === null) {
      return keys;
    }
    this.forEach(node => {
      keys.push(node.key);
    });
    return keys;
  }

  /**
   * 是否包含某个 key
   * @param {number} key
   * @returns {boolean}
   */
  public hasKey(key: number): boolean {
    return this.keys().includes(key);
  }

  /**
   * 是否包含某个 value
   * @param {T} value
   * @returns {boolean}
   */
  public hasValue(value: T): boolean {
    let has: boolean = false;
    if (this.rootNode === null) {
      return has;
    }
    this.forEach((item) => {
      if (item.value === value) {
        has = true;
        return false;
      }
    });
    return has;
  }

  /**
   * 创建树节点
   * @param {number} key
   * @param {T} value
   * @returns {TreeNode<T>}
   */
  public createTreeNode(key: number, value: T): TreeNode<T> {
    return {
      key,
      value,
      left: null,
      right: null,
    };
  }

  /**
   * 插入节点到数中
   * @param {number} key
   * @param {T} value
   */
  public insert(key: number, value: T): void {
    if (this.hasKey(key)) {
      throw new Error(`[insert]key '${key}' is reduplicated`);
    }
    const node = this.createTreeNode(key, value);
    if (this.rootNode) {
      this.insertNode(this.rootNode, node);
    } else {
      this.rootNode = node;
    }
  }

  /**
   * 插入节点的具体操作
   * @param node
   * @param newNode
   */
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    const key: "left" | "right" = newNode.key < node.key ? "left" : "right";
    if (node[key] === null) {
      node[key] = newNode;
    } else {
      this.insertNode(node[key], newNode);
    }
  }

  /**
   * 广度优先: 先序遍历树所有节点(推荐,性能最好,而且可以停止遍历)
   * @param handler - 遍历传入的处理函数
   */
  public forEach(handler: (node: TreeNode<T>) => void | false) {
    const stack: Array<TreeNode<T>> = [this.rootNode!];
    while (stack.length) {
      const node = stack.shift()!; // 先取左边的节点然后取右边的
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
      const isContinue = handler(node);
      if (isContinue === false) {
        break;
      }
    }
  }


  /**
   * 深度优先(递归): 先序遍历找节点
   * @param {'pre'|'in'|'post'} order - 遍历方式
   * @param {(node: TreeNode<T>) => void} handler - 遍历处理函数
   */
  public traverseNodes(order: 'pre' | 'in' | 'post', handler: (node: TreeNode<T>) => void) {
    // 先序遍历: 最先处理当前节点
    function traversePreOrder(node: TreeNode<T> | null) {
      if (node !== null) {
        handler(node);
        traversePreOrder(node.left);
        traversePreOrder(node.right);
      }
    }

    // 中序遍历: 左边的,然后处理当前节点(节点是升序的)
    function traverseInOrder(node: TreeNode<T> | null) {
      if (node !== null) {
        traverseInOrder(node.left);
        handler(node);
        traverseInOrder(node.right);
      }
    }

    // 后序遍历: 左边,右边,最后处理当前节点
    function traversePostOrder(node: TreeNode<T> | null) {
      if (node !== null) {
        traversePostOrder(node.left);
        traversePostOrder(node.right);
        handler(node);
      }
    }

    switch (order) {
      case 'pre':
        traversePreOrder(this.rootNode);
        break;

      case 'in':
        traverseInOrder(this.rootNode);
        break;

      case 'post':
        traversePostOrder(this.rootNode);
        break;

      default:
        throw new TypeError('[traverseNodes]unknown type');
    }
  }


  /**
   * 返回树中的 key 最小的 node
   * @returns {TreeNode<T> | null}
   */
  public findMin(): TreeNode<T> | null {
    let node = this.rootNode!;
    if (!node) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  /**
   * 返回树中的 key 最大的 node
   * @returns {TreeNode<T> | null}
   */
  public findMax(): TreeNode<T> | null {
    let node = this.rootNode!;
    if (!node) {
      return null;
    }
    while (node.right) {
      node = node.right;
    }
    return node;
  }


  /**
   * 搜索某个值
   * @param {number} key 要搜索的 key
   * @returns {null | TreeNode<T>} 返回搜索到的节点或者 null 
   */
  find(key: number): null | TreeNode<T> {
    let target: TreeNode<T> | null = null;
    if (this.rootNode === null) {
      return target;
    }
    this.forEach((node) => {
      if (node.key === key) {
        target = node;
        return false;
      }
    });
    return target;
  }


  /**
   * @param {TreeNode<T>} node - 要替换的节点
   * @param {boolean} isLeftNode - node 是否是其父节点的 left 
   * @param {TreeNode<T>} parentNode - node 的父节点
   * @param {TreeNode<T> | null} newNode - 新节点
   * @returns 返回被替换的接待
   */
  private replaceNode(node: TreeNode<T>, isLeftNode: boolean, parentNode: TreeNode<T>, newNode: TreeNode<T> | null) {
    if (node === this.rootNode) {
      this.rootNode = newNode;
    } else if (isLeftNode) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
    return node;
  }

  /**
   * 移除传入 key 对应的节点 
   * @param {number} key 
   * @returns {TreeNode<T>} 被移除的节点
   * @throws {Error} 没有找到要删除的节点就抛出异常
   */
  public remove(key: number): TreeNode<T> {
    if (this.rootNode === null) {
      throw new Error(`[remove]cannot remove '${key}' in empty tree`);
    }
    let target: TreeNode<T> = this.rootNode!;
    let parent: TreeNode<T> = target;
    let isLeftNode: boolean = false; // 要删除的节点是其父节点的 left 还是 right

    // 先找到要删除的节点, 及其父节点
    while (target.key !== key) {
      parent = target;

      if (key < target.key) {
        // 向左查找
        target = target.left;
        isLeftNode = true;
      } else {
        // 向右查找
        target = target.right;
        isLeftNode = false;
      }

      // 没有找到要删除的节点
      if (target === null) {
        throw new Error(`[remove]not found key '${key}' in tree`);
      }
    }


    // 1. 要删除的节点是没有子节点的叶子节点
    if (target.left === null && target.right === null) {
      return this.replaceNode(target, isLeftNode, parent, null);
    }

    // 2. 要删除的节点有一个 left 节点,没有 right 节点
    if (target.right === null) {
      return this.replaceNode(target, isLeftNode, parent, target.left);
    }

    // 3. 要删除的节点有一个 right 节点,没有 left 节点
    if (target.left === null) {
      return this.replaceNode(target, isLeftNode, parent, target.right);
    }

    // 4. 删除的节点既有 left 也有 right 节点
    // 4.1 找到要删除节点的后继节点
    let successorParent = target;
    let successor = target!.right; // 后继节点(在右子树中寻找)
    while (successor.left !== null) {
      successorParent = successor;
      successor = successor.left;
    }

    // 4.2 修改后继节点的 left 和 right 值
    // 如果当前找到的后继不是 target.right 那么也就是说后继节点
    // 就有自己的 right 节点, 那么就必须修改后继节点的 right 值
    // 如图中要删除15的时候,那么后继节点就是 18, 18 有自己的
    // right 节点, 19 这个节点不能直接丢弃
    successor.left = target.left;
    if (target.right !== successor) {
      successorParent.left = successor.right;
      successor.right = target.right;
    }

    // 4.3 替换
    return this.replaceNode(target, isLeftNode, parent, successor);
  }
}
