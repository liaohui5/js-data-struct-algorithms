import { CirularLinkedList, DoublyCirularLinkedList } from "../CirularLinkedList";

describe('环形链表', () => {
  let cll: CirularLinkedList<string>;
  let dcll: DoublyCirularLinkedList<string>;
  beforeEach(() => {
    cll = new CirularLinkedList<string>();
    dcll = new DoublyCirularLinkedList<string>();
    'abcde'.split('').forEach(item => {
      cll.append(item);
      dcll.append(item);
    });
  });

  it('单向环形链表', () => {
    expect(cll.tail!.next).toBe(cll.head);
  });

  it('双向环形链表', () => {
    expect(dcll.head!.prev).toBe(dcll.tail);
    expect(dcll.tail!.next).toBe(dcll.head);
  });

});
