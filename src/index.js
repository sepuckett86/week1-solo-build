import scoreAnswers from './scoreAnswers.js';

const input1 = document.getElementById('Question1');
const input2 = document.getElementById('Question2');
const input3 = document.getElementById('Question3'); 
const input4 = document.getElementById('Question4');
const input5 = document.getElementById('Question5');
const button = document.getElementById('submit-button');
const resultP = document.getElementById('Results');

button.addEventListener('click', () => {
    const answer1 = input1.value;
    const answer2 = input2.value;
    const answer3 = input3.value;
    const answer4 = input4.value;
    const answer5 = input5.value;

    const score = scoreAnswers(answer1, answer2, answer3, answer4, answer5);
    const percentageRight = parseInt(score) / 5 * 100;
    resultP.innerHTML = 'Your score is ' + score + '/5! That is ' + percentageRight + '% correct!';

});