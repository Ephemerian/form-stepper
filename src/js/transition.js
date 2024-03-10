document.addEventListener('DOMContentLoaded', function() {
    const estimateSection = document.querySelector('.estimate');
    const ratesSection = document.querySelector('.rates');
    const thanksSection = document.querySelector('.thanks');
    const estimateButton = document.querySelector('.estimate__button-next');
    const editButton = document.querySelector('.rates__edit');
    const personalizeButton = document.querySelector('.rates__button');
    const returnButton = document.querySelector('.thanks__button');

    // function hideSection(section) {
    //     section.classList.add('fade-out');
    //     setTimeout(() => {
    //         section.style.display = 'none';
    //         section.classList.remove('fade-out');
    //     }, 500);
    // }
    
    // function showSection(section) {
    //     section.style.display = 'block';
    //     section.classList.add('fade-in');
    //     setTimeout(() => {
    //         section.classList.remove('fade-in');
    //     }, 500);
    // }

    // ratesSection.style.display = 'none';
    // thanksSection.style.display = 'none';

    // estimateButton.addEventListener('click', function() {
    //     hideSection(estimateSection);
    //     showSection(ratesSection);
    // });

    // editButton.addEventListener('click', function() {
    //     hideSection(ratesSection);
    //     showSection(estimateSection);
    // });

    // personalizeButton.addEventListener('click', function() {
    //     hideSection(ratesSection);
    //     showSection(thanksSection);
    // });

    // returnButton.addEventListener('click', function(){
    //     hideSection(thanksSection);
    //     showSection(estimateSection);
    //     estimateSection.style.display ='flex';
    // });

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

    returnButton.addEventListener('click', function(){
        thanksSection.style.display = 'none';
        estimateSection.style.display ='flex';
    })
});