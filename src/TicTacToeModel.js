
import _ from 'lodash';

import PLAYER from './player';

export default class TicTacToeModel {
	constructor() {
		this.board = [];
		this.playerWinsX = 0;
		this.playerWinsO = 0;
		this.player = PLAYER.X;

		this.initBoard();
	}

	initBoard() {
		this.board = _.range(3).map(() => {
			return _.range(3).map(() => {
				return '';
			});
		});
	}

	reset() {
		this.initBoard();
	}

	getWinsY() {
		return this.playerWinsY;
	}
	
	getWinsX() {
		return this.playerWinsX;
	}

	hasWinner() {
		var winner = this.getWinner();

		if (winner) {
			return winner;
		}

		return false;
	}

	getWinner() {
		var winner = {
			topL: null,
			topM: null,
			topR: null,
			midL: null,
			midM: null,
			midR: null,
			botL: null,
			botM: null,
			botR: null
		};

		// Top Row
		if ((this.board[0][0] && this.board[0][1] && this.board[0][2]) == PLAYER.O ||
			(this.board[0][0] && this.board[0][1] && this.board[0][2]) == PLAYER.X) {
			winner.topL = true;
			winner.topM = true;
			winner.topR = true;

			return winner;
		}
		
		// Middle Row
		if ((this.board[1][0] && this.board[1][1] && this.board[1][2]) == PLAYER.O ||
			(this.board[1][0] && this.board[1][1] && this.board[1][2]) == PLAYER.X) {
			winner.midL = true;
			winner.midM = true;
			winner.midR = true;
			
			return winner;
		}
		
		// Bottom Row
		if ((this.board[2][0] && this.board[2][1] && this.board[2][2]) == PLAYER.O ||
			(this.board[2][0] && this.board[2][1] && this.board[2][2]) == PLAYER.X) {
			winner.botL = true;
			winner.botM = true;
			winner.botR = true;
			
			return winner;
		}

		// Diagonal top to bottom
		if ((this.board[0][0] && this.board[1][1] && this.board[2][2]) == PLAYER.O ||
			(this.board[0][0] && this.board[1][1] && this.board[2][2]) == PLAYER.X) {
			winner.topL = true;
			winner.midM = true;
			winner.botR = true;
		
			return winner;
		}

		// Diagonal bottom to top
		if ((this.board[2][0] && this.board[1][1] && this.board[0][2]) == PLAYER.O ||
			(this.board[2][0] && this.board[1][1] && this.board[0][2]) == PLAYER.X) {
			winner.botL = true;
			winner.midM = true;
			winner.topR = true;

			return winner;
		}

		this.playerWinsO++;

		return false;
	}
}