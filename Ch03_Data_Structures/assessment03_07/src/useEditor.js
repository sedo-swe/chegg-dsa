const Editor = require('./editor');
const LinkedList = require("./lib/linkedList");

// const editor1 = new Editor();
// console.log(editor1.cursor);
// console.log(editor1.text);
// console.log(editor1.text.length);


// editor1.insert("K");
// console.log(editor1.cursor);
// console.log(editor1.text);
// console.log(editor1.text.length);


// console.log("\nSingle");
// const editor2 = new Editor(new LinkedList(["A"]));
// console.log(editor2.cursor);
// console.log(editor2.text);
// console.log(editor2.text.length);


// console.log("\nAfter head");
// const editor3 = new Editor(new LinkedList(["a", "b", "c"]));
// editor3.cursor = editor3.text.head;
// console.log(editor3.cursor);
// editor3.insert("d");
// console.log(editor3.cursor);
// console.log(editor3.text);
// console.log(editor3.text.length);

console.log("\nDelete 1");
const editor4 = new Editor(new LinkedList(["a", "b", "c"]));
console.log("editor4.cursor 1");
console.log(editor4.cursor);
console.log(editor4.text.head);
editor4.cursor = editor4.text.head;
console.log("editor4.cursor 2");
console.log(editor4.cursor);
console.log(editor4.text.head);
console.log(editor4.delete());
// console.log("editor4.cursor 3");
// console.log(editor4.cursor.value);
// console.log(editor4.text.toString());
// console.log(editor4.text);
// console.log(editor4.text.length);