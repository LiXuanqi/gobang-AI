import Board from './board';
import Chess from './chess';
import { interval } from './config';
class Game {
    constructor() {
        // black chess - first.
        this._isBlack = true;
        this._inProcess = false;
        this._board = new Board();
        this._board.draw();
    }
    begin() {
        this._isBlack = true;
        this._inProcess = true;
        canvas.onclick = (e)=>{
            const x = Math.round(e.offsetY / interval);
            const y = Math.round(e.offsetX / interval);
            this.nextRound(x, y);
            
        };
    }
    nextRound(x, y) {
        if (this._inProcess) {
            let chess = null;
            if (this._isBlack) {
                chess = new Chess(x, y, "black");          
            } else {
                chess = new Chess(x, y, "white");
            }
            chess.draw();
            this.isWin();
            this._isBlack = !this._isBlack;
        }
    }
    isWin() {
        return this._board.isWin();
    }
}

export default Game;