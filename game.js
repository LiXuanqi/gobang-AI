
var interval = 50;
var width = 800;
var height = 800;
lineWidth = 2;
var lineColor = "#777";
var chessRadius = interval / 2 - 3;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

drawBoard();
drawChess(50,50, "white");
drawChess(50,100, "black");
function initBoardData() {
    var board = [];
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

    context.arc(x, y, chessRadius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();

    context.lineWidth = 1;
    context.strokeStyle="black";
    context.stroke();

    context.closePath();
}