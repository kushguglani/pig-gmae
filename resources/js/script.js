var scores, currentPlayer, currentScore, gameStatus;
init();

function init() {
	currentPlayer = 0;
	scores = [0, 0];
	currentScore = 0;
	gameStatus = 1;
	document.querySelector('.img-dice').style.display = 'none';
	document.querySelector('#score-0').innerText = '0';
	document.querySelector('#score-1').innerText = '0';
	document.querySelector('#current-0').innerText = '0';
	document.querySelector('#current-1').innerText = '0';
	document.querySelector('.name-0').innerText = 'Player 0';
	document.querySelector('.name-1').innerText = 'Player 1';
	document.querySelector('#section-0').classList.remove('active');
	document.querySelector('#section-1').classList.remove('active');
	document.querySelector('.icon-0').classList.remove('ion-ios-circle-filled');
	document.querySelector('.icon-1').classList.remove('ion-ios-circle-filled');
	document.querySelector('.name-0').classList.remove('winClass');
	document.querySelector('.name-1').classList.remove('winClass');
	document.querySelector('#section-0').classList.add('active');
	document.querySelector('.icon-0').classList.add('ion-ios-circle-filled');
}
function next() {
	document.querySelector('#current-' + currentPlayer).innerText = 0;
	document.querySelector('#section-' + currentPlayer).classList.remove('active');
	document.querySelector('.icon-' + currentPlayer).classList.remove('ion-ios-circle-filled');
	document.querySelector('.img-dice').style.display = 'none';
	currentScore = 0;
	currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
	document.querySelector('.icon-' + currentPlayer).classList.add('ion-ios-circle-filled');
	document.querySelector('#section-' + currentPlayer).classList.add('active');
}
function win() {
	document.querySelector('.name-' + currentPlayer).classList.add('winClass');
	document.querySelector('.name-' + currentPlayer).style.fontSize = '140%';
	document.querySelector('.name-' + currentPlayer).innerText = 'You Win!';
	document.querySelector('#section-0').classList.remove('active');
	document.querySelector('#section-1').classList.remove('active');
	document.querySelector('.img-dice').style.display = 'none';
	document.querySelector('.icon-' + currentPlayer).classList.remove('ion-ios-circle-filled');
	document.querySelector('.icon-0').classList.remove('ion-ios-circle-filled');
}

document.querySelector('.rol-dice').addEventListener("click", function () {

	if (gameStatus === 1) {
		var dice = Math.floor(Math.random() * 6) + 1;
		document.querySelector('.img-dice').style.display = 'initial';
		document.querySelector('.img-dice').src = 'resources/img/dice-' + dice + '.png';
		if (dice !== 1) {
			//add score in current
			currentScore += dice;
			document.querySelector('#current-' + currentPlayer).innerText = currentScore;
		}
		else {
			//NextTurn
			next();
		}
	}

});
document.querySelector('.hold').addEventListener("click", function () {
	if (gameStatus === 1) {

		scores[currentPlayer] = scores[currentPlayer] + currentScore;
		var player = document.querySelector('#score-' + currentPlayer);
		player.innerText = scores[currentPlayer];
		if (scores[currentPlayer] >= 100) {
			//win
			win();
			gameStatus = 0;
		}
		else {

			next();
		}

	}
});
document.querySelector('.game-start').addEventListener("click", function () {
	init();
});


