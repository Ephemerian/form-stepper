document.addEventListener('DOMContentLoaded', function() {
    const estimateSection = document.querySelector('.estimate');
    const ratesSection = document.querySelector('.rates');
    const thanksSection = document.querySelector('.thanks');
    const estimateButton = document.querySelector('.estimate__button-next');
    const editButton = document.querySelector('.rates__edit');
    const personalizeButton = document.querySelector('.rates__button');
    
    ratesSection.style.display = 'none';
    thanksSection.style.display = 'none';

    estimateButton.addEventListener('click', function() {
        estimateSection.style.display = 'none';
        ratesSection.style.display = 'block';
    });

    editButton.addEventListener('click', function() {
        ratesSection.style.display = 'none';
        estimateSection.style.display = 'flex';
    });

    personalizeButton.addEventListener('click', function() {
        ratesSection.style.display = 'none';
        thanksSection.style.display = 'block';
    });

});