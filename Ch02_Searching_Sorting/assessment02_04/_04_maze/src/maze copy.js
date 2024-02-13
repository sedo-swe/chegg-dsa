/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
let visited = [];
function mazeSolver(maze, index = [0, 0]) {
    console.log(index);
    if (maze[index[0]][index[1]] === 'e') {
        console.log('Found!!!');
        return true;
    }

    visited.push(index);
    console.log(visited);

    const directions = [[1,0],[0,1],[-1,0],[0,-1]]; // R, D, L, U
    for (direction of directions) {
        const newX = index[0] + direction[0];
        const newY = index[1] + direction[1];
        // console.log(maze[index[0]].length);
        if ((newX >=0) && (newY >=0)
            && (newX < maze.length) && (newY < maze[index[0]].length)) {
                if (visited.filter(node => node[0] === newX && node[1] === newY).length > 0) {
                    console.log("visited! [" + newX + ", " + newY + "]");
                    continue;
                }
                if (maze[newX][newY] !== '*') {
                    console.log("Call next!!!");
                    
                    return mazeSolver(maze, [newX, newY])
                }
        }
    }
    return false;
}

module.exports = mazeSolver;
