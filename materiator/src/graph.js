export default function generateGraph(userSubjects) {
  let userNodes = [];

  for (const subject in subjects) {
    if (!userSubjects[subject]) {
      let node = new Node(subject);

      subjects[subject].forEach((requisite) => {
        //if user has not done subject yet, add it to adjacents
        if (!userSubjects[requisite]) {
          node.addAdjacent(requisite);
        }
      });

      userNodes.push(node);
    }
  }

  let userPriorities = userNodes.map((node) => {
    let priority = calculatePriority(userNodes, node);

    return {
      subject: node.value,
      priority: priority,
    };
  });

  console.log(userPriorities);

  return userPriorities;
}

function calculatePriority(userNodes, node) {
  let subPriority = 0;

  for (const requisite in node.adjacents) {
    //TODO comparar cada value dos userNodes e encontrar o == requisite pra chamar no calculate

    let requisiteNode = userNodes.find((userNode) => {
      return userNode.value === node.adjacents[requisite];
    });

    let requisitePriority = calculatePriority(userNodes, requisiteNode);
    if (requisitePriority > subPriority) {
      subPriority = requisitePriority;
    }
  }
  return subPriority + 1;
}

const subjects = {
  APC: ["C1"],
  C1: ["EA"],
  EA: [],
  DIAC: [],
  IE: [],
};

class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; // adjacency list
  }

  addAdjacent(node) {
    this.adjacents.push(node);
  }

  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1);
      return node;
    }
  }

  getAdjacents() {
    return this.adjacents;
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }
}
