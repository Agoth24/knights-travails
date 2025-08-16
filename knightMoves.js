class Node {
    constructor(row, col, distanceFromStartPosition) {
        this.row = row;
        this.col = col;
        this.distanceFromStartPosition = distanceFromStartPosition;
    }

}

const getNeighbours = (row, col) => {}

function getKnightShortestPath(x, y) {
    const queue = [];
    const startNode = new Node(0, 0, 0);
    queue.push(startNode);

    // Visited?
     const visited = new Set();
     while (queue.length > 0) {
        // Remove node
        // In practice we should use a real queue class so we can dequeue in O(1)
        const node = queue.shift();
        const { row, col, distanceFromStartPosition} = node;

        // Process node

        // Add neighbours
        for (const neighbour of getNeighbours(row, col)) {

        }
     }
}