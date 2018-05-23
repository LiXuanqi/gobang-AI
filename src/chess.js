import { interval, chessRadius } from './config';

class Chess {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw() {
        context.beginPath();
        context.arc(this.y * interval, this.x * interval, chessRadius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    
        context.lineWidth = 1;
        context.strokeStyle="black";
        context.stroke();
        context.closePath();
  
    }
}

export default Chess;