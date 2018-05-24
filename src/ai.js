import { edgeLength, interval } from './config';
import Step from './step';
import Coordinate from './coordinate';
class AI {
    constructor() {
        this._n = edgeLength / interval;
        this.scores = initEmtpyBoard(this._n);
    }
    findBestNextStep(x, y, board) {
        const curtStep = new Step(x, y, board);
        let allPoints = this._findNeedUpdatePoints(curtStep);
        for (let i = 0; i < allPoints.length; i++) {
            if (board[allPoints[i].x][allPoints[i].y] === 0) {
                const allLines = this._getAllLines(allPoints[i], board);
                let score = 0;
                for (let j = 0; j < allLines.length; j++) {
                    score = score + this._evaluate(allLines[j]);
                }
                this.scores[allPoints[i].x][allPoints[i].y] = score;
            }
        }
        console.log(this.scores);
    }
    _evaluate(line) {
        // 1 => AI 
        // 0 => empty 
        // 2 => human 
        if (line.indexOf("11111") !== -1) {
            return 50000;
        }
        if (line === "011110") {
            return 4320;
        }
        if (line === "011100") {
            return 720;
        }
        if (line === "001110") {
            return 720;
        }
        if (line === "011010") {
            return 720;
        }
        if (line === "010110") {
            return 720;
        }
        if (line.indexOf("11110") !== -1) {
            return 720;
        }
        if (line.indexOf("01111") !== -1) {
            return 720;
        }
        if (line.indexOf("11011") !== -1) {
            return 720;
        }
        if (line.indexOf("10111") !== -1) {
            return 720;
        }
        if (line.indexOf("11101") !== -1) {
            return 720;
        }
        if (line === "001100") {
            return 120;
        }
        if (line === "001010") {
            return 120;
        }
        if (line === "010100") {
            return 120;
        }
        if (line === "000100") {
            return 20;
        }
        if (line === "001000") {
            return 20;
        }
        return 0;
    }
    _getAllLines(point, board) {
        let allLines = [];
        const x = point.x;
        const y = point.y;
        // start position (S)
        // SXXXX, XSXXX, XXSXX, XXXSX, XXXXS
        // board[x][y] board[x][y+1] ... board[x][y+5]
        // board[x][y-1] board[x][y] ... board[x][y+3]
        // board[x][y-5] ...             board[x] [y]
        for (let i = -5; i < 1; i++) {
            if (this._inBound(x, y + i) && this._inBound(x, y+i+5)) {
                let line = "" + board[x][y+i] + board[x][y+i+1] + board[x][y+i+2] + board[x][y+i+3] + board[x][y+i+4]+ board[x][y+i+5];
                allLines.push(line);
            }
        }
        // 45
        for (let k = -5; k < 1; k++) {
            if (this._inBound(x+k, y-k) && this._inBound(x+k+5, y-k-5)) {
                let line = "" + board[x+k][y-k] + board[x+k+1][y-k-1] + board[x+k+2][y-k-2] + board[x+k+3][y-k-3] + board[x+k+4][y-k-4] + board[x+k+5][y-k-5];
                allLines.push(line);
            }
        }
        // 90
        for (let l = -5; l < 1; l++) {
            if (this._inBound(x+l, y) && this._inBound(x+l+5, y)) {
                let line = "" + board[x+l][y] + board[x+l+1][y] + board[x+l+2][y] + board[x+l+3][y] + board[x+l+4][y] + board[x+l+5][y];
                allLines.push(line);
            }
        }
        // 135
        for (let j = -5; j < 1; j++) {
            if (this._inBound(x+j, y+j) && this._inBound(x+j+5, y+j+5)) {
                let line = "" + board[x+j][y+j] + board[x+j+1][y+j+1] + board[x+j+2][y+j+2] + board[x+j+3][y+j+3] + board[x+j+4][y+j+4] + board[x+j+5][y+j+5];
                allLines.push(line);
            }
        }
        return allLines;
    }
    _findNeedUpdatePoints(curtStep) {
        // O(5*8) => O(1)
        const x = curtStep.x;
        const y = curtStep.y;
        const directionX = [-1, 1, 0, 0, 1, -1, -1, 1];
        const directionY = [-1, 1, 1, -1, 0, 0, 1, -1];
        let allPoints = [];
        for (let i = 0; i < directionX.length; i++) {
            for (let j = 0; j < 5; j++) {
                const nextX = x + directionX[i] * j;
                const nextY = y + directionY[i] * j;
                if (this._inBound(nextX, nextY)) {
                    const nextPoint = new Coordinate(nextX, nextY);
                    allPoints.push(nextPoint);
                }
  
            }
        }
        return allPoints;
    }
    _inBound(x, y) {
        return 0 <= x && x <= this._n && 0<= y && y <= this._n;
    }
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

export default AI;
