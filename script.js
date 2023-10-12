"use strict";

const details = document.querySelectorAll('details');
const questions = document.querySelectorAll('.questions');

for (let detail of details) {
    detail.addEventListener('toggle', () => {
        let question = detail.firstElementChild;
        question.classList.toggle('questions-toggled');

        let arrowIcon = question.firstElementChild;
        arrowIcon.classList.toggle('arrow-icon-toggled');
    });

    const boxIllustration = document.querySelector('.box-illustration');

    detail.addEventListener('mouseenter', () => {
        boxIllustration.style.marginRight = '-60px';
    });

    detail.addEventListener('mouseleave', () => {
        boxIllustration.style.marginRight = '-80px';
    });
}