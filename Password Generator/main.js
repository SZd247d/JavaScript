const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

console.log(lowercaseEl);

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasSymbol, hasUpper, hasNumber, length);

});

clipboardEl.addEventListener('click', () => {
    const texterea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }
    texterea.value = password;
    document.body.appendChild(texterea);
    texterea.select()
    document.execCommand('copy');
    texterea.remove();
    alert('password has been coupeed to the clipboard');

})


function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        })
    }
    const finallPassword = generatedPassword.slice(0, length);
    return finallPassword;

}


function getRandomLower() {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}


function getRandomUpper() {
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
}

function getRandomNumber() {
    return (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
}

function getRandomSymbol() {
    const symbols = '!@#$%^*(){}[]=<>/,.+-~';
    return symbols[(Math.floor(Math.random() * symbols.length))];
}