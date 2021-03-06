var BinarySearchTree = function(value) {
  var instance = Object.create(binaryTreeMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (value) {
  // recursively 
  var insertNode = BinarySearchTree(value);

  var testNode = function(node){
    // test if value is > or < node.value
    if (value < node.value){
      if (!node.left){
        node.left = insertNode;
      } else {
        testNode(node.left);
      }
    } else if (value > node.value){
      if (!node.right){
        node.right = insertNode;
      } else {
        testNode(node.right);
      }
    }

  };

  testNode(this);
};
// binaryTreeMethods.insert = function (value, node, repeat, insertNode) {
//   // recursively 
//   if(!repeat){
//     insertNode = BinarySearchTree(value);
//     node = this;
//   }
//     if (value < node.value){
//       if (!node.left){
//         node.left = insertNode;
//       } else {
//         this.insert(value, node.left, true,insertNode);
//       }
//     } else if (value > node.value){
//       if (!node.right){
//         node.right = insertNode;
//       } else {
//         this.insert(value, node.right, true, insertNode);
//       }
//     }
//     if(!repeat){
//       this.insert(value, this, true, insertNode)
//     }
// }
binaryTreeMethods.contains = function (target) {
  var found = false;
  var checkNode = function (node){
    if(target === node.value){
      found = true;
      return;
    } else {
      if(target < node.value && node.left){
       checkNode(node.left);
      }
      else if (target > node.value && node.right){
        checkNode(node.right);
      } 
    }
  }
  checkNode(this);
  return found;
};

binaryTreeMethods.depthFirstLog = function (callback) {
  var runNode = function(node){
    callback(node.value);
    if (node.left) {
      runNode(node.left);
    }
    if (node.right) {
      runNode(node.right);
    }
  };
  runNode(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
