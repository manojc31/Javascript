'use strict'

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';

        // When player wins
    } else if (guess === SecretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = SecretNumber;

        //We are changing the background color to green and #60b347 was taken from CSS Style file
        document.querySelector('body').style.backgroundColor = '#60b347';

        //Changing the width of number 
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //When guess is too high
    } else if (guess > SecretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high';
            score--; //you can also write score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game';
            document.querySelector('.score').textContent = 0;
        }

        //When guess is too low 
    } else if (guess < SecretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low';
            score--; //you can also write score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

//Trying to refresh and play the game again using "Again!" option
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    //We are changing the background color to green and #60b347 was taken from CSS Style file
    document.querySelector('body').style.backgroundColor = '#222';
    //Changing the width of number 
    document.querySelector('.number').style.width = '15rem';
});


