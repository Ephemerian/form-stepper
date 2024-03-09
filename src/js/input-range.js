document.addEventListener('DOMContentLoaded', () => {
  const coverageAmountDisplay = document.getElementById('coverage-amount');
  const yearsCoverageDisplay = document.getElementById('years-coverage');
  const coverageSlider = document.getElementById('coverage-slider');
  const yearsSlider = document.getElementById('years-slider');

  coverageSlider.addEventListener('input', () => {
    const value = parseInt(coverageSlider.value).toLocaleString();
    coverageAmountDisplay.textContent = `$${value}`;
    coverageSlider.style.setProperty('--value', coverageSlider.value);
  });

  yearsSlider.addEventListener('input', () => {
    yearsCoverageDisplay.textContent = `${yearsSlider.value} years`;
    yearsSlider.style.setProperty('--value', yearsSlider.value);
  });

  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min);
    e.style.setProperty('--max', e.max);
  }
});
