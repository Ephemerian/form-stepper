document.addEventListener('DOMContentLoaded', function() {
    const estimateSection = document.querySelector('.estimate');
    const ratesSection = document.querySelector('.rates');
    const thanksSection = document.querySelector('.thanks');
    const estimateButton = document.querySelector('.estimate__button-next');
    const editButton = document.querySelector('.rates__edit');
    const personalizeButton = document.querySelector('.rates__button');
    const returnButton = document.querySelector('.thanks__button');

    function hideSection(section) {
        section.classList.add('fade-out');
        setTimeout(() => {
            section.style.display = 'none';
            section.classList.remove('fade-out'); // Забираємо клас, щоб уникнути конфліктів при повторному відображенні
        }, 500); // Затримка відповідає тривалості анімації fadeOut
    }
    
    function showSection(section) {
        section.style.display = 'block'; // Можливо, потрібно 'flex' або інше значення відповідно до вашої верстки
        section.classList.add('fade-in');
        setTimeout(() => {
            section.classList.remove('fade-in');
        }, 500); // Затримка відповідає тривалості анімації fadeIn
    }

    ratesSection.style.display = 'none';
    thanksSection.style.display = 'none';

    estimateButton.addEventListener('click', function() {
        hideSection(estimateSection);
        showSection(ratesSection);
    });

    editButton.addEventListener('click', function() {
        hideSection(ratesSection);
        showSection(estimateSection);
    });

    personalizeButton.addEventListener('click', function() {
        hideSection(ratesSection);
        showSection(thanksSection);
    });

    returnButton.addEventListener('click', function(){
        hideSection(thanksSection);
        showSection(estimateSection);
        estimateSection.style.display ='flex';
    });

    
    // ratesSection.style.display = 'none';
    // thanksSection.style.display = 'none';

    // estimateButton.addEventListener('click', function() {
    //     estimateSection.style.display = 'none';
    //     ratesSection.style.display = 'block';
    // });

    // editButton.addEventListener('click', function() {
    //     ratesSection.style.display = 'none';
    //     estimateSection.style.display = 'flex';
    // });

    // personalizeButton.addEventListener('click', function() {
    //     ratesSection.style.display = 'none';
    //     thanksSection.style.display = 'block';
    // });

    // returnButton.addEventListener('click', function(){
    //     thanksSection.style.display = 'none';
    //     estimateSection.style.display ='flex';
    // })
});