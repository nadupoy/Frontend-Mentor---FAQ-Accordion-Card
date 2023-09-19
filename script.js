"use strict";
/*
1. Switch the display property of '.answer' between 'none' and 'block'.
Can be achieved by targeting the sibling element of '.question_and_icon' as that is what will be receiving the 'onclick' event.
2. Switch the font-weight & font-color of '.question'.
3. Switch the position of '.box-illustration-desktop'.
4. Switch the rotation of the arrow icon.
*/

const frequentlyAskedQuestions = document.querySelectorAll('.question_and_icon');

function displayAnswer() {
    this.nextElementSibling.classList.toggle('display_answer');
    this.firstElementChild.classList.toggle('question_focus');
    this.lastElementChild.classList.toggle('rotate_icon');
}

for (let frequentlyAskedQuestion of frequentlyAskedQuestions) {
    frequentlyAskedQuestion.addEventListener('click', displayAnswer);
}