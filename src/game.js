
var interval = 50;
var edgeLength = 800;
var lineWidth = 2;
var lineColor = "#777";
var chessRadius = interval / 2 - 3;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = edgeLength;
canvas.height = edgeLength;

// global params
var isPlaying = false
var me = false


drawBoard();

initBoardData();

startGame();

function startGame() {
    isPlaying = true;
}

canvas.onclick = function(e) {
    if (isPlaying) {

        let x = Math.round(e.offsetY / interval);
        let y = Math.round(e.offsetX / interval);
        
        if (isEmpty(x,y)) {
            if (me) {
                step(x, y, "player1");
            } else {
                step(x, y, "player2");
            }
            me = !me;
        } 
   
    }

}

function step(x, y, player) {
 
    if (player === "player1") {
        board[x][y] = 1;
        drawChess(x, y, "black");
    
    }
    if (player === "player2") {
        board[x][y] = 2;
        drawChess(x, y, "white");
    }
    console.log(isWin(x,y));
}

function isEmpty(x, y) {
    if (board[x][y] === 0) {
        return true;
    } else {
        return false;
    }     
}

function isWin() {

   
}

function isInBound(node) {
    return 0 <= node.x && node.x <= height / interval && 0 <= node.y && node.y <= width / interval;
}

function initBoardData() {
    var col = width / interval;
    var row = width / interval;
    for (var i = 0; i <= col; i++) {
        board[i] = [];
        for (var j = 0; j <= row; j++) {
            board[i][j] = 0;
        }
    }
    console.log(board);
}

function drawBoard() {
    drawCol();
    drawRow();
}

function drawRow() {
    context.beginPath();
    for (var i = 0; i <= width/interval; i++) {
        context.moveTo(0,interval * i);
        context.lineTo(width, interval * i);
        context.lineWidth = lineWidth;
        context.strokeStyle = lineColor;
        context.stroke();
    }
    context.closePath();
}

function drawCol() {
    context.beginPath();
    for (var i = 0; i <= width/interval; i++) {
        context.moveTo(interval * i, 0);
        context.lineTo(interval * i, height);
        context.lineWidth = lineWidth;
        context.strokeStyle = lineColor;
        context.stroke();
    }
    context.closePath();
}

function drawChess(x, y, color) {
    context.beginPath();

    context.arc(y * interval, x * interval, chessRadius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();

    context.lineWidth = 1;
    context.strokeStyle="black";
    context.stroke();

    context.closePath();
}