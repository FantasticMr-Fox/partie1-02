/****************************************************************************
*
* This file contains all the functions necessary for the game to run.
*
*****************************************************************************/

function showScore(score, totalWords){
    console.log('Your final score is: ' + score + ' out of ' + totalWords);
}

function makeChoice() {
    let userChoice = prompt('Choose mode: 1 for Words, 2 for Sentences');
    while (userChoice !== '1' && userChoice !== '2') {
        userChoice = prompt('Invalid choice. Please enter 1 for Words or 2 for Sentences');
    }
    return userChoice;
}

function gameLoop(propositionsList) {
    let score = 0;
    for (let i = 0; i < propositionsList.length; i++) {
        let userInput = prompt('Enter: '+ propositionsList[i]);

        if (userInput === propositionsList[i]) {
            score += 1;
            console.log('Correct! Score increased to:', score);
        }
        else {
            console.log('Incorrect. The correct answer was:', propositionsList[i]);
        }
    }
    return score;
}

function startGame() {
    let userChoice = makeChoice();
    let score = 0;
    let totalWords = 0;

    if (userChoice === '1') {
        score = gameLoop(wordList);
        totalWords = wordList.length;
    } else if (userChoice === '2') {
        score = gameLoop(sentenceList);
        totalWords = sentenceList.length;
    }
    showScore(score, totalWords);
}