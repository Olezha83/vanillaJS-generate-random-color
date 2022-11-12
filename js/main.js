const colorBox = document.getElementById('colorBox')
const button = document.getElementById('button')

function generateRandomNumber() {
  return Math.floor(Math.random() * 256)
}

function assignRandomColor() {
  const randomColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`
  colorBox.style.backgroundColor = randomColor
}

window.onload = assignRandomColor

button.onclick = assignRandomColor
