const input1 = document.getElementById('Question1');
const input2 = document.getElementById('Question2');
const input3 = document.getElementById('Question3'); 
const input4 = document.getElementById('Question4');
const input5 = document.getElementById('Question5');
const button = document.getElementById('submit-button');
const resultP = document.getElementById('Results');

button.addEventListener('click', (event) => {
    const answer1 = input1.value;
    const answer2 = input2.value;
    const answer3 = input3.value;
    const answer4 = input4.value;
    const answer5 = input5.value;
    console.log(answer1, answer2, answer3, answer4, answer5);
});