import { knightPosition } from "./Knight.js";

// My Own Implementation
const BFS_baserecursive = (toPos, passedQueue = [], passedVisited = [], passedShortest = []) => {
    let queue = [...passedQueue];
    let visited = [...passedVisited];
    let shortest = passedShortest;
    // console.log(queue)

    while(queue.length != 0) {
        const curr = queue.shift();
        visited.push(curr);
        console.log("init_visited: ", visited);
        console.log("init_shotest", shortest);
        console.log("curr", curr);

        if (curr[0] == toPos[0] && curr[1] == toPos[1]) return visited; 
        if (shortest.length != 0 && (shortest.length < visited.length)) return shortest;
    
        const knight = knightPosition(curr[0], curr[1]);
        const moves = knight.getPossiblePositions();

        for(const move of moves) {
            if (valExists(move, visited)) continue; // Skip already visited positions
            
            queue.push(move);
            console.log("queue: ", queue);
            const path = BFS_baserecursive(toPos, queue, visited, shortest);

            if (shortest.length == 0 && path.length != 0) {
                
                shortest = [...path];
                console.log("1. shortest", shortest, "path", path.length);
                console.log("curr", curr, "move", move);
                visited.pop();

                break;

            } else if(shortest.length != 0 && path.length != 0) {

                shortest = (shortest.length < path.length) ? [...shortest] : [...path];
                console.log("2. shortest", shortest, "path", path.length);
                visited.pop()
                break;
                
            } else {
                console.log("3. shortest", shortest, "path", path.length);
                visited.pop()
            }

            console.log("current: ", curr, "move: ", move);
        }
    }

    console.log("HAHAHAH", shortest);
    return shortest;
}

// My Own Implementation
export const BFS_nonrecursive = (fromPos, toPos) => {
    let queue = [];
    let visited = [];
    
    queue.push(fromPos);

    return BFS_baserecursive(toPos, queue, visited);
}

// Optimal & recommended approach
export const BFS_iterative = (fromPos, toPos) => {
    // helper to produce stable string keys for map/set
    const key = (p) => `${p[0]},${p[1]}`;
    const inBounds = (r, c) => r >= 0 && r <= 7 && c >= 0 && c <= 7;

    const offsets = [
        [-1, 2], [1, 2],
        [2, 1], [2, -1],
        [1, -2], [-1, -2],
        [-2, -1], [-2, 1],
    ];

    const queue = [fromPos];
    const visited = new Set([key(fromPos)]);
    const parent = new Map(); // childKey -> parentKey

    while (queue.length > 0) {
        const curr = queue.shift();

        if (curr[0] === toPos[0] && curr[1] === toPos[1]) {
            // reconstruct path from toPos back to fromPos
            const path = [];
            let curKey = key(curr);
            while (curKey != null) {
                const [r, c] = curKey.split(',').map(Number);
                path.unshift([r, c]);
                curKey = parent.get(curKey) ?? null;
                // stop when parent is undefined (we reached the start)
            }
            return path;
        }

        for (const [dx, dy] of offsets) {
            const nr = curr[0] + dx;
            const nc = curr[1] + dy;
            if (!inBounds(nr, nc)) continue;

            const k = `${nr},${nc}`;
            if (visited.has(k)) continue;

            visited.add(k);
            parent.set(k, key(curr));
            queue.push([nr, nc]);
        }
    }

    // no path found (shouldn't happen on 8x8 board)
    return [];
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