
export default class TicTacToeView {
	constructor() {
		this.board = document.getElementById('board');
		this.xScore = document.getElementsByClassName('x-score')[0];
		this.oScore = document.getElementsByClassName('o-score')[0];
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

		this.board.innerHTML = boardString;
		this.xScore.innerHTML = model.playerWinsX;
		this.oScore.innerHTML = model.playerWinsO;
	}

	drawWinner(winner) {
		// Top Row Win
		if (winner.topL) {
			let node = document.querySelectorAll("[data-x='0'][data-y='0']")[0];
			node.classList.add('winner');
		}
		if (winner.topM) {
			let node = document.querySelectorAll("[data-x='1'][data-y='0']")[0];
			node.classList.add('winner');
		}
		if (winner.topR) {
			let node = document.querySelectorAll("[data-x='2'][data-y='0']")[0];
			node.classList.add('winner');
		}
		
		// Middle Row Win	
		if (winner.midL) {
			let node = document.querySelectorAll("[data-x='0'][data-y='1']")[0];
			node.classList.add('winner');
		}
		if (winner.midM) {
			let node = document.querySelectorAll("[data-x='1'][data-y='1']")[0];
			node.classList.add('winner');
		}
		if (winner.midR) {
			let node = document.querySelectorAll("[data-x='2'][data-y='1']")[0];
			node.classList.add('winner');
		}

		// Bottom Row Win	
		if (winner.botL) {
			let node = document.querySelectorAll("[data-x='0'][data-y='2']")[0];
			node.classList.add('winner');
		}
		if (winner.botM) {
			let node = document.querySelectorAll("[data-x='1'][data-y='2']")[0];
			node.classList.add('winner');
		}
		if (winner.botR) {
			let node = document.querySelectorAll("[data-x='2'][data-y='2']")[0];
			node.classList.add('winner');
		}

		// Diagonal top to bot
		if (winner.topL) {
			let node = document.querySelectorAll("[data-x='0'][data-y='0']")[0];
			node.classList.add('winner');
		}
		if (winner.midM) {
			let node = document.querySelectorAll("[data-x='1'][data-y='1']")[0];
			node.classList.add('winner');
		}
		if (winner.botR) {
			let node = document.querySelectorAll("[data-x='2'][data-y='2']")[0];
			node.classList.add('winner');
		}

		// Diagonal bot to top
		if (winner.botL) {
			let node = document.querySelectorAll("[data-x='0'][data-y='2']")[0];
			node.classList.add('winner');
		}
		if (winner.midM) {
			let node = document.querySelectorAll("[data-x='1'][data-y='1']")[0];
			node.classList.add('winner');
		}
		if (winner.topR) {
			let node = document.querySelectorAll("[data-x='2'][data-y='2']")[0];
			node.classList.add('winner');
		}
	}
}