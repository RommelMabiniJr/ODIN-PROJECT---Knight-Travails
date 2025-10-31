import { knightPosition } from "./Knight.js";

const BFS = (fromPos, toPos) => {
    const vertices = 64;
    let curr_vert = fromPos;
    let visited = []
    
}

export const BFS_recursive = (curr_position, toPosition, visited = []) => {
    let queue = [...visited];
    console.log(queue);
    queue.push(curr_position);
    
    if(curr_position[0] == toPosition[0] 
    && curr_position[1] == toPosition[1]) return queue;

    const knight = knightPosition(curr_position[0], curr_position[1]);
    const moves = knight.getPossiblePositions(curr_position);
    let paths = [];

    for (const move of moves) {
        // const [row, column] = move;
        // visited.push(curr_position);
         
        if(valExists(move, queue)) break;

        const path = BFS_recursive(move, toPosition, queue);

        if(path.length != 0) paths.push(path);
        console.log("paths", paths, "move", move, "from", curr_position);     
    }

    const cleanedPaths = paths.filter(arr => arr.length > 0);

    return cleanedPaths.length == 0 ? [] : cleanedPaths.reduce((min, arr) => arr.length < min.length ? arr : min);
}

export const BFS_nonrecursive = (fromPos, toPos) => {
    let queue = [];
    let visited = [];
    queue.push(fromPos);

    while(queue.length != 0) {
        const curr = queue.shift();
        visited.push(curr);

        const knight = knightPosition(curr[0], curr[1]);
        const moves = knight.getPossiblePositions();

        for(const move of moves) {

        }
    }
}

export const valExists = (position, twoDimArr) => {
    const [row, column] = position;

    for (const val of twoDimArr) {
        if(row == val[0] && column == val[1]) {
            return true;
        }
    }

    return false;
}