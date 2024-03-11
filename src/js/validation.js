document.addEventListener('DOMContentLoaded', function () {
    const estimateButton = document.querySelector('.estimate__button-next');
    const estimateSection = document.querySelector('.estimate');
    const ratesSection = document.querySelector('.rates');
    const progressBar = document.querySelector('.header__progress-bar');

    estimateButton.addEventListener('click', function (e) {
        e.preventDefault();

        let isFormValid = true;

        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            alert('Please select a gender.');
            isFormValid = false;
        }

        const nicotineSelected = document.querySelector('input[name="estimateOption"]:checked');
        if (!nicotineSelected) {
            alert('Please indicate if you are a nicotine user.');
            isFormValid = false;
        }

        const dobInput = document.querySelector('input[placeholder="MM/DD/YYYY"]');
        if (!dobInput.value.match(/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/)) {
            alert('Please enter your date of birth in the format MM/DD/YYYY.');
            isFormValid = false;
        }

        const zipCodeInput = document.querySelector('input[placeholder="ZIP Code"]');
        if (!zipCodeInput.value.match(/^\d{1,6}$/)) {
            alert('ZIP Code must be a number with up to 6 digits.');
            isFormValid = false;
        }

        if (!isFormValid) {
            return;
        }

        estimateSection.style.display = 'none';
        ratesSection.style.display = 'block';
        progressBar.style.width = '50vw';
    });
});