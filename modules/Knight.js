export const knightPosition = (row, column) => {
    if(row < 0 || row > 7 || column < 0 || column > 7 ) {
        throw new Error(`Invalid position params: row is "${row}" & column is "${column}"`);
    }

    let moves = [];

    const knightMoveOffsets = [
        [-1, 2], [1, 2],
        [2, 1], [2, -1],
        [1, -2], [-1, -2],
        [-2, -1], [-2, 1],
    ]

    const getPossiblePositions = () => {
        for (const [x, y] of knightMoveOffsets) {
            const curr_row = row + x;
            const curr_column = column + y;

            if(curr_row >= 0 && curr_row <= 7 && curr_column >= 0 && curr_column <=7) {
                moves.push([curr_row, curr_column]);
            }
        }

        return moves;
    }

    return {
        getPossiblePositions
    }
} 