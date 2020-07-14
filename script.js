
// DOM elements

const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const specialCharactersEl = document.getElementById('special-characters');
const generateEl = document.getElementById('generate');


const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  specialCharacter: getRandomSpecChar
};

// generate event listen
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSpecialCharacters = specialCharactersEl.checked; 

  resultEl.innerText = password(hasLower, hasUpper, hasNumbers, hasSpecialCharacters, length);
});

// generate password function 
function password (lower, upper, number, specialCharacter, length) {
  let password = "";

  const typesCount = lower + upper + number + specialCharacter;

  const typesArr = [{lower}, {upper}, {number}, {specialCharacter}].filter(item => Object.values(item) [0]
  );

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      password += randomFunction[funcName]();
    });
  }

  const finalPassword = password.slice(0, length);

  return finalPassword;
}


// gets a random lowercase letter using the character code 97-122
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// gdts a random upper case letter using the character code 65-90
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// gets a random number using character code 48-57
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// gets a random special character by choosing a random number in the string and pulling that character by its index
function getRandomSpecChar() {
  const SpecialCharacters = "!@#$%^&*(){}[]=<>?,.";
  return SpecialCharacters[Math.floor(Math.random() * SpecialCharacters.length)];
}

