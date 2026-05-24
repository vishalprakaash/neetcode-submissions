class TreeNode {
    constructor() {
        this.children = {}
        this.word = false
    }
}
class PrefixTree {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root
        for (let c of word) {
            if(!curr.children?.[c]) {
                curr.children[c] = new TreeNode()
            }
            curr = curr.children[c]
        }
        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
       let curr = this.root
        for (let c of word) {
            if(curr.children?.[c]) {
                curr = curr.children[c]
            } else {
                return false
            }
        }
        return curr.word;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root
        for (let c of prefix) {
            if(curr.children?.[c]) {
                curr = curr.children[c]
            } else {
                return false
            }
        }
        return true;
    }
}
