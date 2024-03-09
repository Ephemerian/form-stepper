document.addEventListener('DOMContentLoaded', function() {
    const estimateSection = document.querySelector('.estimate');
    const ratesSection = document.querySelector('.rates');
    const estimateButton = document.querySelector('.estimate__button-next');
    const editButton = document.querySelector('.rates__edit');

    ratesSection.style.display = 'none';

    estimateButton.addEventListener('click', function() {
        estimateSection.style.display = 'none';
        ratesSection.style.display = 'block';
    });

    editButton.addEventListener('click', function() {
        ratesSection.style.display = 'none';
        estimateSection.style.display = 'block';
        estimateSection.offsetHeight;
        estimateSection.style.display = 'flex';
    });
});