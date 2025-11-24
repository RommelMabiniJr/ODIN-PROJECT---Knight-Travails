# ODIN-PROJECT---Knight-Travails

## Project — Knight's Travails (Odin Project)
This repository contains my solution to the ["Knight's Travails"](https://www.theodinproject.com/lessons/javascript-knights-travails) exercise from The Odin Project (JavaScript track). The goal is to find the shortest sequence of knight moves on a standard 8×8 chessboard between two squares.

## Summary
- Positions are represented as [x, y] with 0 ≤ x, y ≤ 7.
- Knight moves are the eight offsets: (±1, ±2) and (±2, ±1).
- The board is treated as an implicit graph where each square is a vertex and knight moves are edges.
- The shortest path is found with Breadth-First Search (BFS).

## Files
- modules/Knight.js — helper to generate valid knight moves from a position.
- modules/BFS.js — two implementations:
  - BFS_baserecursive / BFS_nonrecursive — my initial, recursive attempt.
  - BFS_iterative — recommended iterative BFS using a queue + parent map (final/correct).
- utils/print.js — prints the found path to the console.

## Final approach (recommended)
- Use iterative BFS:
  - Keep a queue (frontier) of positions to explore.
  - Use a Set of visited keys ("x,y") to avoid revisiting.
  - Use a Map parentMap that stores parentKey for each visited node.
  - When the target is found, reconstruct the path by following parentMap back to the start.
- This approach is memory/time efficient for an 8×8 board and guarantees the shortest path.

## Why the initial recursive attempt failed
- Shared mutable arrays (queue and visited) were copied and passed between recursive calls, but the code also popped entries to backtrack. This caused earlier frames to lose entries (for example the start [0,0]) and produced incomplete paths.
- Recursively pushing the entire queue into deeper frames complicates the algorithm and made correctness hard to reason about.
- The recursive approach also mixes traversal state with path reconstruction, which increases the chance of bugs and produces confusing debug logs.

## Concrete differences (short)
- Recursive version:
  - Mutates and passes queue/visited between recursive frames.
  - Attempts to backtrack by pop/push — brittle and bug-prone.
  - Debug logs exposed missing start node and inconsistent visited lists.
- Iterative version (final):
  - Single queue used in one loop — clear BFS frontier semantics.
  - Visited Set prevents revisits.
  - Parent map cleanly records predecessors; path reconstruction is deterministic and includes the start.

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

## How to run
- Add or run a small script that imports BFS_iterative and prints results. From the repo root:
  node path/to/your/test.js

## Notes and next steps
- I kept the recursive code in the repo for study and comparison, but BFS_iterative is the correct & recommended implementation.

# Acknowledgements
- Problem prompt and guidance: [The Odin Project](https://www.theodinproject.com/)
