import { edgeLength, interval } from './config';
import { addISOYears } from 'date-fns';

const n = edgeLength / interval;

class Step {
    constructor(x, y, board) {
        this.x = x;
        this.y = y;
        this.board = board;
    }

}

const findBestNextStep = (x, y, board) => {
    step = new Step(x, y, board);
    alphaBeta(1, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, step);
} 
/* 
    alpha: best for ai.
    beta: worst for human.
*/
const alphaBeta = (depth, alpha, beta, curtStep) => {
    if (depth === 0) {
        return evaluate(curtStep.board);
    }
    let allSteps = generateAllPossibleSteps(curtStep);
    while (allSteps.length !== 0) {
        const nextStep = allSteps.pop();
        val = -alphaBeta(depth - 1, -beta, -alpha, nextStep);
        allSteps.push(nextStep);
        if (val >= beta) {
            return beta;
        }
        if (val > alpha) {
            alpha = val;
        }
    }
    return alpha;
}

const generateAllPossibleSteps = (curtStep) => {
    const board = curtStep.board;
    const x = curtStep.x;
    const y = curtStep.y;
    let allSteps = [];
    const curtColor = board[x][y];
    const nextColor = curtColor === 1 ? 2 : 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                let nextBoard = [...board];
                nextBoard[i][j] = nextColor;
                allSteps.push(new Step(i, j, [...nextBoard]));
            }
        }
    }
    return allSteps;
}

const evaluate = (board) => {
    return 10;
}

const initEmtpyBoard = (n) => {
    let board = []
    for (let i = 0; i <= n; i++) {
        board[i] = [];
        for (let j = 0; j <= n; j++) {
            board[i][j] = 0;
        }
    }
    return board;
}

export {
    findBestNextStep
}
