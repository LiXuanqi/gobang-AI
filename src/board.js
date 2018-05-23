import { edgeLength, interval, lineWidth, lineColor} from './config';
class Board {
    constructor() {    
        // init board data.
        this.n = edgeLength / interval;
        const board = initEmtpyBoard(this.n);
        this._data = [...board];
        // init counter
        const emptyCounter = initEmptyCounter(this.n);
        this._rowCounters = [...emptyCounter];
        this._colCounters = [...emptyCounter];
        this._diagCounters = [...emptyCounter];
        this._inverseDiagCounters = [...emptyCounter];
    }
    // Getter
    get data() {
        return this._data;
    }
    // Method
    isWin() {
        console.log('who wins?')
    }

    draw() {
        context.beginPath();
        for (var i = 0; i <= this.n; i++) {
            context.moveTo(0,interval * i);
            context.lineTo(edgeLength, interval * i);
            context.lineWidth = lineWidth;
            context.strokeStyle = lineColor;
            context.stroke();

            context.moveTo(interval * i, 0);
            context.lineTo(interval * i, edgeLength);
            context.lineWidth = lineWidth;
            context.strokeStyle = lineColor;
            context.stroke();
        }
        context.closePath();
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

const initEmptyCounter = (n) => {
    let emptyCounter = [];
    for (let i = 0; i <= n; i++) {
       emptyCounter[i] = 0;
    }
    return emptyCounter;
}

export default Board;