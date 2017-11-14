import _ from 'lodash';

const PLAYER = {
	X: "X",
	O: "O"
}

class TicTacToeModel {
	constructor() {
		this.player = PLAYER.X;
		this.board = _.range(3).map(() => {
			return _.range(3).map(() => {
				return '';
			});
		});
	}
}

class TicTacToeView {
	constructor() {
		this.node = document.getElementById('root');
	}

	render(model) {
		var b = model.board;
		var boardString = `
			<table class="board">
				<tr>
					<td class="tl" data-x="0" data-y="0">${b[0][0]}</td>
					<td class="tm" data-x="1" data-y="0">${b[0][1]}</td>
					<td class="tr" data-x="2" data-y="0">${b[0][2]}</td>
				</tr>
				<tr>
					<td class="ml" data-x="0" data-y="1">${b[1][0]}</td>
					<td class="mm" data-x="1" data-y="1">${b[1][1]}</td>
					<td class="mr" data-x="2" data-y="1">${b[1][2]}</td>
				</tr>
				<tr>
					<td class="bl" data-x="0" data-y="2">${b[2][0]}</td>
					<td class="bm" data-x="1" data-y="2">${b[2][1]}</td>
					<td class="br" data-x="2" data-y="2">${b[2][2]}</td>
				</tr>
			</table>`;

		this.node.innerHTML = boardString;
	}
}

class TicTacToeController {
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

window.controller = new TicTacToeController();


