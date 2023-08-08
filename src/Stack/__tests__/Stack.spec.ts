import Stack from "../Stack";

describe.only("stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it("happy path", () => {
    stack.push(1);
    stack.push(3);
    stack.push(5);

    let lastItem = stack.pop();
    expect(lastItem).toBe(5);

    lastItem = stack.pop();
    expect(lastItem).toBe(3);

    lastItem = stack.pop();
    expect(lastItem).toBe(1);
  });

  it("from", () => {
    const stk = Stack.from<number>([2, 4, 6]);
    expect(stk.pop()).toBe(6);
    expect(stk.pop()).toBe(4);
    expect(stk.pop()).toBe(2);
  });

  it("size", () => {
    // 栈的大小
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
  });

  it("isEmpty", () => {
    // 是否为空
    const stk1 = new Stack();
    const stk2 = new Stack();
    stk2.push(1);

    expect(stk1.isEmpty()).toBeTruthy();
    expect(stk2.isEmpty()).toBeFalsy();
  });

  it("clear", () => {
    // 清除栈中的所有元素
    const stk = Stack.from([1, 2, 3]);
    expect(stk.size()).toBe(3);
    stk.clear();
    expect(stk.size()).toBe(0);
  });

  it("peek", () => {
    // 只是查看最后一个并不是出栈 不改变数组长度
    const stk1 = new Stack<string>();
    expect(stk1.peek()).toBe(undefined);

    const stk2 = new Stack<string>();
    stk2.push("hello");
    expect(stk2.peek()).toBe("hello");

    stk2.push("world");
    expect(stk2.peek()).toBe("world");

    // 不会执行出栈操作,只是查看
    expect(stk2.size()).toBe(2);
  });
});
