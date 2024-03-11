document.addEventListener('DOMContentLoaded', function() {
    const estimateSection = document.querySelector('.estimate');
    const ratesSection = document.querySelector('.rates');
    const editButton = document.querySelector('.rates__edit');
    const progressBar = document.querySelector('.header__progress-bar');
    const personalizeButton = document.querySelector('.rates__button');
    const returnButton = document.querySelector('.thanks__button');

    ratesSection.style.display = 'none';

    editButton.addEventListener('click', function() {
        ratesSection.style.display = 'none';
        estimateSection.style.display = 'block';
        estimateSection.offsetHeight;
        estimateSection.style.display = 'flex';
        progressBar.style.width = '5vw';
    });

    personalizeButton.addEventListener('click', function() {
        progressBar.style.width = '100vw';
    });

    returnButton.addEventListener('click', function() {
        progressBar.style.width = '5vw';
    });
    
});