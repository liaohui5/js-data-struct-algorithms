import { CirularLinkedList, DoublyCirularLinkedList } from "../CirularLinkedList";


function createCirularLinkedList() {
  const cll = new CirularLinkedList<string>();
  'abcde'.split('').forEach(item => {
    cll.append(item);
  });
  return cll;
}

function createDoublyCirularLinkedList() {
  const dcll = new DoublyCirularLinkedList<string>();
  'abcde'.split('').forEach(item => {
    dcll.append(item);
  });
  return dcll;
}

describe('环形链表', () => {
  it('单向环形链表', () => {
    const cll = createCirularLinkedList();
    expect(cll.tail!.next).toBe(cll.head);
  });

  it('双向环形链表', () => {
    const dcll = createDoublyCirularLinkedList();
    expect(dcll.head!.prev).toBe(dcll.tail);
    expect(dcll.tail!.next).toBe(dcll.head);
  });

});
