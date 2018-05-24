import { edgeLength, interval, lineWidth, lineColor} from './config';
import Chess from './chess';
class Board {
    constructor() {    
        // init board data.
        this.n = edgeLength / interval;
        const board = initEmtpyBoard(this.n);
        this._data = [...board];

    }
    // Getter
    get data() {
        return this._data;
    }
    // Method
    step(x, y, color) {
            let chess = null;
            if (color === "black") {
                chess = new Chess(x, y, "black");   
                this._data[x][y] = 1;  
            } else {
                chess = new Chess(x, y, "white");   
                this._data[x][y] = 2;  
            }
            chess.draw();   
    }
    isEmpty(x, y) {
        if (this._data[x][y] === 0) {
            return true;
        } else {
            return false;
        }
    }
    isWin(x, y) {
        if (this._checkRow(x,y)) {
            return true;
        }
        if (this._checkCol(x,y)) {
            return true;
        }
        if (this._checkDiag(x,y)) {
            return true;
        }
        if (this._checkInverseDiag(x,y)) {
            return true;
        }
        return false;
    }
    _inBound(x, y) {
        return 0 <= x && x <= this.n && 0<= y && y <= this.n;
    }
    _checkInverseDiag(x, y) {
        const board = this._data;
        const color = board[x][y];
        let count = 1;
        const initX = x;
        const initY = y;
        while (this._inBound(x + 1, y - 1) && board[x + 1][y - 1] === color) {
            count++;
            x++;
            y--;
        }
        x = initX;
        y = initY;
        while (this._inBound(x - 1, y + 1) && board[x - 1][y + 1] === color) {
            count++;
            x--;
            y++;
        }
        if (count >= 5) {
            return true;
        }
        return false;
    }
    _checkDiag(x,y) {
        const board = this._data;
        const color = board[x][y];
        let count = 1;
        const initX = x;
        const initY = y;
        while (this._inBound(x + 1, y + 1) && board[x + 1][y + 1] === color) {
            count++;
            x++;
            y++;
        }
        x = initX;
        y = initY;
        while (this._inBound(x - 1, y - 1) && board[x - 1][y - 1] === color) {
            count++;
            x--;
            y--;
        }
        if (count >= 5) {
            return true;
        }
        return false;
    }
    _checkCol(x, y) {
        const board = this._data;
        const color = board[x][y];
        let count = 1;
        const initX = x;
        while (this._inBound(x + 1, y) && board[x + 1][y] === color) {
            count++;
            x++;
        }
        x = initX;
        while (this._inBound(x - 1, y) && board[x - 1][y] === color) {
            count++;
            x--;
        }
        if (count >= 5) {
            return true;
        }
        return false;
    }

    _checkRow(x, y) {
        const board = this._data;
        const color = board[x][y];
        let count = 1;
        const initY = y;
        while (this._inBound(x, y + 1) && board[x][y + 1] === color) {
            count++;
            y++;
        }
        y = initY;
        while (this._inBound(x, y - 1) && board[x][y - 1] === color) {
            count++;
            y--;
        }
        if (count >= 5) {
            return true;
        }
        return false;
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

export default Board;