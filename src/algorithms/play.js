class Queue {
    // Array is used to implement a Queue 
    constructor() {
        this.items = [];
    }
    // enqueue function 
    enqueue(element) {
        // adding element to the queue 
        this.items.push(element);
    }
    // dequeue function 
    dequeue() {
        if (this.empty())
            return "Underflow";
        return this.items.shift();
    }
    // front function 
    front() {

        if (this.empty())
            return "No elements in Queue";
        return this.items[0];
    }
    empty() {
        // return true if the queue is empty. 
        return this.items.length == 0;
    }


}
function getNeighboursUnvisited(grid, node) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);

}

export function bfs(grid, startNode, endNode) {


    var allVisitedNodes = []

    var flag = false;
    var queue = new Queue();
    startNode.isVisited = true;
    allVisitedNodes.push(startNode);
    queue.enqueue(startNode);
    while (!queue.empty()) {
        var node = queue.front();
        queue.dequeue();
        //console.log(node);
        var neighbors = getNeighboursUnvisited(grid, node);
        if (neighbors.length) {
            for (const neighbor of neighbors) {
                if (neighbor.isWall)
                    continue;
                neighbor.isVisited = true;
                allVisitedNodes.push(neighbor);
                neighbor.previousNode = node;
                queue.enqueue(neighbor);
                if (neighbor === endNode) {
                    flag = true;
                    break;


                }
            }
            if (flag)
                break;
        }
    }
    return allVisitedNodes;
}

export function some_one(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}