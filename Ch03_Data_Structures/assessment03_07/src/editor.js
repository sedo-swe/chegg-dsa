const LinkedList = require("./lib/linkedList");
const Node = require("./lib/node");

class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */
  insert(char) {
    if (this.cursor != null) {
      let cursor_next = this.cursor.next;
      this.cursor.next = new Node(char, cursor_next);
      this.cursor = this.cursor.next;
    } else {
      this.text.insertAtHead(char);
      this.cursor = this.text.find((node, index) => node.value === char);
    }
    return this;
  }

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * @returns {Editor} a reference to this editor
   */
  delete() {
    if (this.cursor != null) {
      let [c, p] = this.text.findWithPrevious((node) => node === this.cursor);
      
      if (p == null) {
        this.cursor = p;
        this.text.head = c.next;
      } else {
        p.next = c.next;
        this.cursor = p;
      }
    }
    return this;
  }

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {
    let [c, p] = this.text.findWithPrevious((node) => node === this.cursor);
    this.cursor = p;
    return this;
  }

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference t this editor
   */
  arrowRight() {
    if (this.cursor != null) {
      let [c, p] = this.text.findWithPrevious((node) => node === this.cursor);
      let lastElem = this.text.find((node, index) => index === this.length - 1);
      if (c != null && c.next != null)
        this.cursor = c.next;
    } else {
      this.cursor = this.text.head;
    }
    return this;
  }
}

module.exports = Editor;
