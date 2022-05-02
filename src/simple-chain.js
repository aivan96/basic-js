const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    links: [],

    getLength() {
      return this.links.length + 1;
    },
    addLink(value) {
      this.links.push(value);
      return this;
    },
    removeLink(position) {
      if (this.links[position - 1] !== undefined) {
        this.links.splice(position - 1, 1);
        return this;
      } else {
        this.links = [];
        throw new Error("You can't remove incorrect link!");
      }
    },
    reverseChain() {
      this.links.reverse();
      return this;
    },
    finishChain() {
      const strOut = this.links.reduce((acc, elem, index) => (index === 0) ?
          acc + "( " + elem + " )" :
          acc + "~~( " + elem + " )", "");
      this.links = [];
      return strOut;
    }
};

module.exports = {
  chainMaker
};
