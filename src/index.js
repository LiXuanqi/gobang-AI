import Board from './board';
import Chess from './chess';
import Game from './game';

window.canvas = document.getElementById("canvas");
window.context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

let game = new Game();
game.begin();

