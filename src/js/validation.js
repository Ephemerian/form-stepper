// window.isFormValid = false;

// document.addEventListener('DOMContentLoaded', function () {
//     const estimateButton = document.querySelector('.estimate__button-next');

//     estimateButton.addEventListener('click', function (e) {
//         e.preventDefault();

//         window.isFormValid = true;

//         const genderSelected = document.querySelector('input[name="gender"]:checked');
//         if (!genderSelected) {
//             alert('Please select a gender.');
//             window.isFormValid = false;
//         }

//         const nicotineSelected = document.querySelector('input[name="estimateOption"]:checked');
//         if (!nicotineSelected) {
//             alert('Please indicate if you are a nicotine user.');
//             window.isFormValid = false;
//         }

//         const dobInput = document.querySelector('input[placeholder="MM/DD/YYYY"]');
//         if (!dobInput.value.match(/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/)) {
//             alert('Please enter your date of birth in the format MM/DD/YYYY.');
//             window.isFormValid = false;
//         }

//         const zipCodeInput = document.querySelector('input[placeholder="ZIP Code"]');
//         if (!zipCodeInput.value.match(/^\d{1,6}$/)) {
//             alert('ZIP Code must be a number with up to 6 digits.');
//             window.isFormValid = false;
//         }

//         if (!window.isFormValid) {
//             e.preventDefault();
//         }
//     });
// });