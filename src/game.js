import Board from './board';
import { findBestNextStep } from './ai';
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

            this.oneRound(x, y);
      
        };
    }
    end() {
        this._inProcess = false;
    }
    oneRound(x, y) {
        this.step(x, y);
        findBestNextStep(x,y, this._board.data);
        // this.step();
        
    }
    step(x, y) {
        if (this._inProcess && this._board.isEmpty(x, y)) {
            if (this._isBlack) {     
                this._board.step(x, y, "black");     
            } else {
                this._board.step(x, y, "white");  
            }
            if(this.isWin(x,y)){
                alert((this._isBlack ? "black" : "white") + ' win');
                this.end();
            } else {
                this._isBlack = !this._isBlack;
            }
        }
    }
    isWin(x,y) {
        return this._board.isWin(x,y);
    }
}

export default Game;