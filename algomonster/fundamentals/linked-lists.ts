class LNode<T> {
  constructor(
    public data: T,
    public next: LNode<T> | null = null,
  ) {}
}

function createLinkedList(values: number[]): LNode<number> | null {
  if (values.length === 0) return null;

  let head: LNode<number> = new LNode(values[0]);
  let currentNode = head;

  for (let i = 1; i < values.length; i++) {
    currentNode.next = new LNode(values[i]);
    currentNode.next = currentNode;
  }

  return head;
}
