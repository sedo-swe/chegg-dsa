/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
let visited = [];
function mazeSolver(maze, index = [0, 0]) {
    if (index[0] == 0 && index[1] == 0)
        visited = [];
    // console.log(index);
    if (maze[index[0]][index[1]] === 'e') {
        return "";
    }

    visited.push(index);

    const directions = [[0,1, "R"],[1,0, "D"],[0,-1, "L"],[-1,0, "U"]];
    for (let direction of directions) {
        const newX = index[0] + direction[0];
        const newY = index[1] + direction[1];
        let moveTo = direction[2];
        
        if ((newX >=0) && (newY >=0)
            && (newX < maze.length) && (newY < maze[index[0]].length)) {
                if (visited.filter(node => node[0] === newX && node[1] === newY).length > 0) {
                    // console.log("visited! [" + newX + ", " + newY + "]");
                    continue;
                }
                if (maze[newX][newY] !== '*') {
                    // console.log(`${moveTo} - newX: ${newX}, newY: ${newY}`);
                    // return mazeSolver(maze, [newX, newY]) + moveTo;
                    return moveTo + mazeSolver(maze, [newX, newY]);
                }
        }
    }
    return "not found";
}

module.exports = mazeSolver;
