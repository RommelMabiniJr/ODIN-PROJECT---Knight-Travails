import { BFS_iterative, BFS_nonrecursive } from "./modules/BFS.js";
import { printPath } from "./utils/print.js";

// console.log([].length);
// const pos = BFS_nonrecursive([0,0], [1,2]);
// const pos = BFS_nonrecursive([0,0], [3,3]);
// const pos = BFS_nonrecursive([3,3], [0,0]);
const pos = BFS_iterative([0,0], [7,7]);
printPath(pos);