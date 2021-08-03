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
  APC: [],
  C1: [],
  EA: [],
  DIAC: [],
  IE: [],
  C2: ["C2"],
  Física1: [],
  FisicaExperimental1: [],
  IAL: [],
  PE: ["C1"],
  DS: ["APC"],
  Métodos: ["C2"],
  EE: [],
  Humanidades: [],
  TED1: ["IAL"],
  PED1: ["IAL"],
  OO: ["APC"],
  MD1: [],
  GPEQ: ["EE"],
  MDS: ["OO"],
  EDA1: ["APC"],
  FAC: ["TED1"],
  MD2: ["MD1"],
  PI1: ["OO"],
  IHC: ["DIAC", "MDS"],
  Requisitos: ["MDS"],
  SBD1: ["MD2"],
  FSO: ["FAC"],
  Compiladores1: ["EDA1"],
  EDA2: ["EDA1"],
  Qualidade: ["IHC", "GPEQ"],
  Testes: ["MDS"],
  Desenho: ["Requisitos"],
  FRC: ["FSO"],
  SBD2: ["SBD1"],
  PA: ["EDA1", "C1"],
  TecProg: ["Testes", "Desenho"],
  Paradigmas: ["Compiladores", "OO"],
  FSE: ["FSO"],
  PPD: ["FRC", "EDA2"],
  EPS: ["TecProg"],
  GCES: ["Testes"],
  Estágio: [],
  PI2: [],
  TCC1: [],
  TCC2: ["TCC1"],
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
