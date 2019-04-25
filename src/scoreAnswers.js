function scoreAnswers(answer1, answer2, answer3, answer4, answer5) {
    let total = 0;
    if(answer1.trim().toLowerCase() === 'sloth') {
        total += 1;
    }
    if(answer2.trim().toLowerCase() === 'sloth') {
        total += 1;
    }
    if(answer3.trim().toLowerCase() === 'bamboo') {
        total += 1;
    }
    if(answer4.trim().toLowerCase() === 'manatee') {
        total += 1;
    }
    if(answer5.trim().toLowerCase() === '3') {
        total += 1;
    }
    return total;
}

export default scoreAnswers;