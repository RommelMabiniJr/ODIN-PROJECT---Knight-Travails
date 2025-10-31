import { BFS_recursive, valExists } from "./modules/BFS.js";
import { knightPosition } from "./modules/Knight.js";

const test = knightPosition(7, 7);
console.log(test.getPossiblePositions());
// console.log([1,2 ] == [1, 2]);
// console.log(valExists([3,3], [[2,1],[3,2],[3,2]]))

console.log(BFS_recursive([7,7], [4,4]));
// console.log(BFS_recursive([4,4], [7,7]));