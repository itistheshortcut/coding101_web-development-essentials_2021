//  GLOBAL VARIABLES
const userWeight = document.querySelector('#userWeight');
const userHeight = document.querySelector('#userHeight');
const calcBtn = document.querySelector('#calcBtn');
const resultSection = document.querySelector('#resultSection');

const underweight = document.querySelector('#underweight');
const normal = document.querySelector('#normal');
const overweight = document.querySelector('#overweight');
const obese = document.querySelector('#obese');

// FUNCTIONS
const calculateBMI = (weight, height) => {
  let heightCM = height / 100;
  let bmi = weight / (heightCM * heightCM);
  return bmi.toFixed(1);
};

const addColor = (status) => {
  underweight.style.color = '';
  normal.style.color = '';
  overweight.style.color = '';
  obese.style.color = '';

  if (status === 'underweight') {
    return (underweight.style.color = 'blue');
  } else if (status === 'normal') {
    return (normal.style.color = 'green');
  } else if (status === 'overweight') {
    return (overweight.style.color = 'orange');
  } else if (status === 'obese') {
    return (obese.style.color = 'red');
  } else {
    underweight.style.color = '';
    normal.style.color = '';
    overweight.style.color = '';
    obese.style.color = '';
    return;
  }
};

const resultCard = (status, userbmi) => {
  // create img tag
  let image = document.createElement('img');
  image.src = `images/${status}.png`;
  resultSection.appendChild(image);

  // create a tag for display bmi result
  let bmiValue = document.createElement('h4');
  bmiValue.textContent = `your BMI is ${userbmi}`;
  resultSection.appendChild(bmiValue);
};

const displayResult = () => {
  resultSection.innerHTML = '';

  let myBMI = calculateBMI(userWeight.value, userHeight.value);

  if (myBMI < 18.5) {
    addColor('underweight');
    return resultCard('underweight', myBMI);
  } else if (myBMI >= 18.5 && myBMI < 24.9) {
    addColor('normal');
    return resultCard('normal', myBMI);
  } else if (myBMI >= 25 && myBMI < 29.9) {
    addColor('overweight');
    return resultCard('overweight', myBMI);
  } else if (myBMI >= 30) {
    addColor('obese');
    return resultCard('obese', myBMI);
  } else {
    addColor('notvalue');
    return (resultSection.textContent = 'Please enter your weight and height!');
  }
};

// ADDEVENTLESITNERS
calcBtn.addEventListener('click', displayResult);
