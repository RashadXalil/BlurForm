const password = document.getElementById('password')
const bg = document.getElementById('bg')
let currentBlur = 10
let lengthCount = 0
let numberCount = 0
let specialCount = 0
let upperCaseCount = 0
let specialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '=',
  '+',
  '<',
  ',',
  '>',
  '.',
  '?',
  '/',
  '|',
]
password.addEventListener('keydown', function () {
  if (checkLength(password.value) && lengthCount == 0) {
    currentBlur -= 2
    lengthCount += 1
    changeBlur(currentBlur)
    return
  }
  if (checkNumber(password.value) && numberCount == 0) {
    currentBlur -= 2
    numberCount += 1
    changeBlur(currentBlur)
    console.log(currentBlur)
    return
  }
  if (checkUpperCase(password.value) && upperCaseCount == 0) {
    currentBlur -= 2
    upperCaseCount += 1
    changeBlur(currentBlur)
    console.log(currentBlur)
    return
  }
  if (checkSpecial(password.value) && specialCount == 0) {
    currentBlur -= 2
    specialCount += 1
    console.log(currentBlur)
    changeBlur(currentBlur)
    return
  }
})
function checkLength(element) {
  if (element.length > 8) {
    return true
  }
  return false
}
function changeBlur(blur) {
  bg.style.filter = `blur(${blur}px)`
}
function checkNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (Number.parseInt(array[i])) {
      return true
    }
  }
  return false
}
function checkUpperCase(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toUpperCase() == array[i]) {
      return true
    }
  }
  return false
}
function checkSpecial(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < specialCharacters.length; j++) {
      if (array[i] == specialCharacters[j]) {
        return true
      }
    }
  }
  return false
}
