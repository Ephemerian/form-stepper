document.addEventListener('DOMContentLoaded', function() {
    const estimateSection = document.querySelector('.estimate');
    const ratesSection = document.querySelector('.rates');
    const estimateButton = document.querySelector('.estimate__button-next');
    const editButton = document.querySelector('.rates__edit');
    const progressBar = document.querySelector('.header__progress-bar');
    const personalizeButton = document.querySelector('.rates__button');

    ratesSection.style.display = 'none';

    estimateButton.addEventListener('click', function() {
        estimateSection.style.display = 'none';
        ratesSection.style.display = 'block';
        progressBar.style.width = '50vw';
    });

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
});