let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    changeCurrentNumberColor()
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    changeCurrentNumberColor()
}

function changeCurrentNumberColor () {
    if (count < 0) {
      document.getElementById('currentNumber').style.color = 'red'
    } else {
      document.getElementById('currentNumber').style.color = 'black'
    }
  }