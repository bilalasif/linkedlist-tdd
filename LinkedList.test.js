const LinkedList = require("./LinkedList");

describe("#insertAtHead ", () => {
  test("it adds the element tot he beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with Index less then 0", () => {
    test("it returns null", () => {
      const ll = new LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe("with Index greater then list length", () => {
    test("it returns null", () => {
      const ll = new LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe("with Index 0", () => {
    test("it returns the head", () => {
      const ll = new LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe("with Index in the middle", () => {
    test("it returns the element at that index", () => {
      const ll = new LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});
