//  GLOBAL VARIABLES
const userWeight = document.querySelector('#userWeight');
const userHeight = document.querySelector('#userHeight');
const calcBtn = document.querySelector('#calcBtn');
const resultSection = document.querySelector('#resultSection');

// FUNCTIONS
const calculateBMI = (weight, height) => {
  let heightCM = height / 100;
  let bmi = weight / (heightCM * heightCM);
  return bmi.toFixed(1);
};

const displayResult = () => {
  resultSection.innerHTML = '';

  let myBMI = calculateBMI(userWeight.value, userHeight.value);

  if (myBMI < 18.5) {
    // create img tag
    let image = document.createElement('img');
    image.src = 'images/underweight.png';
    resultSection.appendChild(image);

    // create a tag for display bmi result
    let bmiValue = document.createElement('h4');
    bmiValue.textContent = `your BMI is ${myBMI}`;
    return resultSection.appendChild(bmiValue);
  } else if (myBMI >= 18.5 && myBMI < 24.9) {
    // create img tag
    let image = document.createElement('img');
    image.src = 'images/normal.png';
    resultSection.appendChild(image);

    // create a tag for display bmi result
    let bmiValue = document.createElement('h4');
    bmiValue.textContent = `your BMI is ${myBMI}`;
    return resultSection.appendChild(bmiValue);
  } else if (myBMI >= 25 && myBMI < 29.9) {
    // create img tag
    let image = document.createElement('img');
    image.src = 'images/overweight.png';
    resultSection.appendChild(image);

    // create a tag for display bmi result
    let bmiValue = document.createElement('h4');
    bmiValue.textContent = `your BMI is ${myBMI}`;
    return resultSection.appendChild(bmiValue);
  } else if (myBMI >= 30) {
    // create img tag
    let image = document.createElement('img');
    image.src = 'images/obese.png';
    resultSection.appendChild(image);

    // create a tag for display bmi result
    let bmiValue = document.createElement('h4');
    bmiValue.textContent = `your BMI is ${myBMI}`;
    return resultSection.appendChild(bmiValue);
  }
};

// ADDEVENTLESITNERS
calcBtn.addEventListener('click', displayResult);
