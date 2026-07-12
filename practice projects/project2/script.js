const form = document.querySelector('form');
let value;

form.addEventListener('submit',function(e){
  e.preventDefault()

  let height = parseFloat(document.querySelector('#h').value)
  let weight = parseFloat(document.querySelector('#w').value)
  let result = document.querySelector('#result')

  if ((weight <= 0 || isNaN(weight)) &&
  (height <= 0 || isNaN(height))) {
    result.innerHTML = 'Please enter valid height and weight';
  }
  else if (height <= 0 || isNaN(height)) {
    result.innerHTML = 'Please enter a valid height';
  }
  else if (weight <= 0 || isNaN(weight)) {
    result.innerHTML = 'Please enter a valid weight';
  }
  else {
    height = height / 100;
    value = (weight / (height * height)).toFixed(2); 
  }

  if (value > 0 && value <= 18.5) {
    result.innerHTML = `BMI : ${value} - Underweight`
  }
  else if (value > 18.5 && value <= 25) {
    result.innerHTML = `BMI : ${value} - Normal`
  }
  else if (value >25 && value <= 30) {
    result.innerHTML = `BMI : ${value} - Overweight`
  }
  else if(value > 30) {
    result.innerHTML = `BMI : ${value} - Obese`
  }
 }
)

