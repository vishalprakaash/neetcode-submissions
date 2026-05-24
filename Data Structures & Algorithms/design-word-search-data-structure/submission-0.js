class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
   const dfs = (index, node) => {
    if(index === word.length) {
        return node.isEndOfWord
    }
    const char = word[index];
    if(char === ".") {
        for (let child in node.children) {
          if (dfs(index + 1, node.children[child])) {
            return true;
          }
        }
        return false;
    } else {
        if (!node.children[char]) return false;
        return dfs(index + 1, node.children[char]);
    }
   }
   return dfs(0, this.root)
  }
}
