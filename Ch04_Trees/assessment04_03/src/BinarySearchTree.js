class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(k, v) {
    // your solution here
    if (this.key == null) {
      this.key = k;
      this.value = v;
    } else if (k < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(k, v, this);
      } else {
        this.left.insert(k, v);
      }
    } else if (k > this.key) {
      if (this.right == null) {
        this.right = new BinarySearchTree(k, v, this);
      } else {
        this.right.insert(k, v);
      }
    }
  }

  find(k) {
    // your solution here
    if (this.key === k) {
      return this.value;
    } else if (k < this.key && this.left) {
      return this.left.find(k);
    } else if (k > this.key && this.right) {
      return this.right.find(k);
    } else {
      throw new Error("No key in this tree");
    }
  }

  remove(k) {
    // your solution here
    if (this.key === k) {
      if (this.left && this.right) {
        let successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (k < this.key && this.left) {
      this.left.remove(k);
    } else if (k > this.key && this.right) {
      this.right.remove(k);
    } else {
      throw new Error("No key in this tree");
    }
  }
  
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

module.exports = BinarySearchTree;
