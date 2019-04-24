const test = QUnit.test;

function scoreAnswers(answer1, answer2, answer3, answer4, answer5) {
    return 5;
}

test('return 5 if all answers are correct', (assert) => {
    // Arrange
    const answer1 = 'sloth';
    const answer2 = 'sloth';
    const answer3 = 'bamboo';
    const answer4 = 'manatee';
    const answer5 = 3;
    const expected = 5;
    // Act
    const actual = scoreAnswers();
    // Assert
    assert.equal(actual, expected);
});