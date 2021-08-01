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
        console.log("requisite", requisite);
      });

      userNodes.push(node);
    }
  }

  console.log(userNodes);

  let userPriorities = userNodes.map((node) => {
    let priority = calculatePriority(node);

    return {
      node: node,
      priority: priority,
    };
  });

  console.log(userPriorities);

  return null;
}

function calculatePriority(node) {
  let subPriority = 0;
  for (const requisite in node.adjacents) {
    //TODO comparar cada value dos adjascents e encontrar o == requisite pra chamar no calculate

    let requisitePriority = calculatePriority(node.adjascents[requisite]);
    if (requisitePriority > subPriority) {
      subPriority = requisitePriority;
    }
  }
  return subPriority + 1;
}

const subjects = {
  APC: ["C1"],
  C1: ["EA", "APC"],
  EA: [],
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
