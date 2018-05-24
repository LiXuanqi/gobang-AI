import Board from './board';
import Chess from './chess';
import Game from './game';

window.canvas = document.getElementById("canvas");
window.context = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;

let game = new Game();

$("#play").click(() => {
    game.begin();
});



