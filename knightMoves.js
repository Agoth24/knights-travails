const directions = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [2, -1],
  [2, 1],
  [1, -2],
  [1, 2],
];

class Node {
  constructor(row, col, distanceFromStartPosition) {
    this.row = row;
    this.col = col;
    this.distanceFromStartPosition = distanceFromStartPosition;
  }

  get getPositionString() {
    return `${this.row}, ${this.col}`;
  }
}

const getNeighbours = (row, col) => {
  const neighbours = [];

  for (const direction of directions) {
    const [rowChange, colChange] = direction;

    const neighbourRow = row + rowChange;
    const neighbourCol = col + colChange

    neighbours.push([neighbourRow, neighbourCol])
  }
  
};

function getKnightShortestPath(targetRow, targetCol) {
  const queue = [];
  const startNode = new Node(0, 0, 0);
  queue.push(startNode);

  // Visited?
  const visited = new Set();
  while (queue.length > 0) {
    // Remove node
    // In practice we should use a real queue class so we can dequeue in O(1)
    const node = queue.shift();
    const { row, col, distanceFromStartPosition } = node;

    // Process node
    if (row === targetRow && col === targetCol)
      return distanceFromStartPosition;
    visited.add(node.getPositionString());

    // Add neighbours
    for (const neighbour of getNeighbours(row, col)) {
      const [neighbourRow, neighbourCol] = neighbour;
      const neighbourNode = new Node(
        neighbourRow,
        neighbourCol,
        distanceFromStartPosition + 1
      );

      if (visited.has(neighbourNode.getPositionString())) continue;

      queue.push(neighbourNode);
    }
  }
}
