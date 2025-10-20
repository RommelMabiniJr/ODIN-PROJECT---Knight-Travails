# ODIN-PROJECT---Knight-Travails

## Project — Knight's Travails (Odin Project)
This repository contains the Knight's Travails assignment from The Odin Project (JavaScript course). The goal is to find the shortest sequence of knight moves on a standard 8×8 chessboard between two squares.

## Problem summary
- Represent board positions as coordinates: `[x, y]` with `0 <= x, y <= 7`.
- Valid knight moves: (±1, ±2) and (±2, ±1).
- Use a graph-search algorithm to find the shortest path between two positions.
- Output the path as an array of coordinates, including start and end.

## Recommended approach
- Use Breadth-First Search (BFS) starting from the source square. BFS guarantees the shortest path in an unweighted graph.
- Track visited positions to avoid revisiting squares.
- For each visited node, store a reference to its parent to reconstruct the path when the target is found.

## Example usage
Given an implementation `knightMoves(start, end)`:

- `knightMoves([0,0], [1,2])` => `[[0,0], [1,2]]`
- `knightMoves([0,0], [3,3])` => e.g. `[[0,0],[2,1],[3,3]]` or `[[0,0],[1,2],[3,3]]`
- Example console output suggested by the assignment:
  > You made it in 3 moves! Here's your path:
  > [3,3]
  > [4,5]
  > [2,4]
  > [4,3]

## Implementation notes
- Validate inputs are within bounds (0–7).
- Generate valid moves for a position by filtering out-of-bounds candidates.
- Use a queue for BFS and a Map/Object to keep parent pointers for path reconstruction.
- Time complexity: O(64) in practice (bounded board), BFS will be fast.

## How to run / test
- Add your implementation file (e.g. `knightTravails.js`) and run with Node:
  ```sh
  node knightTravails.js
  ```
- Print results to the console or add unit tests as desired


## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.
