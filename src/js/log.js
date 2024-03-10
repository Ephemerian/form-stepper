document.addEventListener('DOMContentLoaded', () => {
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const nicotineInputs = document.querySelectorAll('input[name="estimateOption"]');
    const dobInput = document.querySelector('.estimate__input[placeholder="MM/DD/YYYY"]');
    const zipInput = document.querySelector('.estimate__input[placeholder="ZIP Code"]');
    const coverageAmountDisplay = document.getElementById('coverage-amount');
    const yearsCoverageDisplay = document.getElementById('years-coverage');
    const quoteButton = document.getElementById('quote-button');
  
    const getSelectedRadioValue = (radioButtons) => {
      for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          return radioButton.value;
        }
      }
      return null;
    };

    quoteButton.addEventListener('click', () => {
      const selectedGender = getSelectedRadioValue(genderInputs);
      const selectedNicotineUse = getSelectedRadioValue(nicotineInputs);
      const dobValue = dobInput.value;
      const zipValue = zipInput.value;
      const coverageAmount = coverageAmountDisplay.textContent;
      const yearsOfCoverage = yearsCoverageDisplay.textContent;
  
      console.log(`Gender: ${selectedGender}`);
      console.log(`Nicotine User: ${selectedNicotineUse}`);
      console.log(`Date of Birth: ${dobValue}`);
      console.log(`ZIP Code: ${zipValue}`);
      console.log(`Coverage Amount: ${coverageAmount}`);
      console.log(`Years of Coverage: ${yearsOfCoverage}`);
    });
  });