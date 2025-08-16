class Node {
    constructor(row, col, distanceFromStartPosition) {
        this.row = row;
        this.col = col;
        this.distanceFromStartPosition = distanceFromStartPosition;
    }

}
function getKnightShortestPath(x, y) {
    const queue = [];
    const startNode = new Node(0, 0, 0);
}