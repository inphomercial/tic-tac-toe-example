
export default class TicTacToeView {
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