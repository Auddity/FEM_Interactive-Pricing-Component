const slider = document.getElementById('slider');
const pageViews = document.getElementById('quantity-views');
const perMonth = document.getElementById('amount');
const discountToggle = document.getElementById('toggle');
const toggleBtn = document.getElementById('toggle-btn');
const startBtn = document.getElementById('start-btn');

const viewsArr = ['10K', '50K', '100K', '500K', '1M'];
const costArr = ['8', '12', '16', '24', '36'];

// Display Page Open Values
document.addEventListener('DOMContentLoaded', () => {
  displayValues();
  updateSliderFillColor();
});

// Slider Event Listener
slider.addEventListener('input', () => {
  displayValues();
  updateSliderFillColor();
});

// Display Values
const displayValues = () => {
  pageViews.innerText = viewsArr[slider.value];
  if(toggle.classList.contains('yearly')) {
    applyDiscount();
  } else {
    perMonth.innerText = `$ ${costArr[slider.value]}.00`;
  }
};

// Monthly/Yearly Toggle Event Listener
discountToggle.addEventListener('click', () => {
  discountToggle.classList.toggle('yearly');
  // below - updates when toggle removes yearly
  displayValues();
});

// Apply Discount to Per Month
const applyDiscount = () => {
  costArr.map(num => Number(num));
  let discount = costArr[slider.value] - costArr[slider.value] * 0.25;
  perMonth.innerText = `$ ${discount}.00`;
};

// Slider Bar Background Fill
const updateSliderFillColor = () => {
  const fillPercent = ['0', '25', '50', '75', '100'];
  slider.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) ${fillPercent[slider.value]}%, hsl(224, 65%, 95%) ${fillPercent[slider.value]}%)`
};

startBtn.addEventListener('click', () => {
    startBtn.innerText = 'Trial Begun!';
    startBtn.style.color = 'hsl(174, 77%, 80%)';
});

// RATES
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month