
import _ from 'lodash';

import PLAYER from './player';

export default class TicTacToeModel {
	constructor() {
		this.player = PLAYER.X;
		this.board = _.range(3).map(() => {
			return _.range(3).map(() => {
				return '';
			});
		});
	}
}