
import PLAYER from './player';

import TicTacToeModel from './TicTacToeModel';
import TicTacToeView from './TicTacToeView';

export default class TicTacToeController {
	constructor() {
		this.model = new TicTacToeModel();
		this.view = new TicTacToeView();

		// Start by initializing the board
		this.draw();
	}

	turn(x, y) {
		// Check if we can play there
		if(this.spotIsFilled(x, y)) {
			return;
		}

		// Update model board square with player piece
		this.model.board[y][x] = this.model.player;

		// Update Board
		this.draw();

		// Check Winner
		this.checkWinner();

		// Change Player Turn
		this.changePlayer();
	}

	spotIsFilled(x, y) {
		return this.model.board[y][x] !== "" ? true : false;
	}

	checkWinner() {

	}

	changePlayer() {
		this.model.player = (this.model.player == PLAYER.X) ? PLAYER.O : PLAYER.X; 
	}

	draw() {
		this.view.render(this.model);
		this.setupEvents();
	}

	handleClickEvent(e) {
		var x = e.target.dataset.x;
		var y = e.target.dataset.y;

		this.turn(x, y);
	}
	
	handleMouseOverEvent(e) {
		if(e.target.innerHTML !== "") {
			return;
		}

		e.target.classList.add('hovering');
		e.target.innerHTML = this.model.player;
	}
	
	handleMouseLeaveEvent(e) {
		if(!e.target.classList.contains('hovering')) {
			return;
		}

		e.target.classList.remove('hovering');
		e.target.innerHTML = "";
	}
	
	setupEvents() {
		var spaces = document.getElementsByTagName('td');
	
		for(var i = 0; i < spaces.length; i++) {
			spaces[i].addEventListener('click', this.handleClickEvent.bind(this));
			spaces[i].addEventListener('mouseover', this.handleMouseOverEvent.bind(this));
			spaces[i].addEventListener('mouseleave', this.handleMouseLeaveEvent.bind(this));
		}
	}
}