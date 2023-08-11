import Stack from "../Stack";

// create stack and fill some items for test case
function createStack(fillItems: number = 0): Stack<number> {
  const stack = new Stack<number>();
  if (fillItems) {
    for (let i = 1; i <= fillItems; i++) {
      stack.items.push(i);
    }
    stack.items.length = fillItems;
  }
  return stack;
}


describe("stack", () => {
  it("from", () => {
    const stk = Stack.from<number>([2, 4, 6]);
    expect(stk.items.at(0)).toBe(2);
    expect(stk.items.at(1)).toBe(4);
    expect(stk.items.at(2)).toBe(6);
  });

  it("size", () => {
    // 栈的大小
    const stack = createStack(4);
    expect(stack.size()).toBe(4);
  });

  it("isEmpty", () => {
    // 是否为空
    const stk1 = createStack();
    const stk2 = createStack(2);

    expect(stk1.isEmpty()).toBe(true);
    expect(stk2.isEmpty()).toBe(false);
  });

  it("clear", () => {
    // 清除栈中的所有元素
    const stack = createStack(4);
    expect(stack.items.length).toBe(4);

    // when
    stack.clear();

    // then
    expect(stack.items.length).toBe(0);
  });

  it("peek", () => {
    // 只是查看最后一个并不是出栈 不改变数组长度
    const n = 4;

    // give
    const stack = createStack(n);
    expect(stack.items.length).toBe(n);

    // when
    const peekItem = stack.peek();
    expect(peekItem).toBe(n);

    // then
    expect(stack.items.length).toBe(n);
  });
});
