const number1 = document.querySelector('#number1');
number1.getAttribute('number');

const number2 = document.querySelector('#number2');
number2.getAttribute('number');

function add(number1, number2){ 
    return number1 + number2;
};

const addBtn = document.getElementById('add');
addBtn.addEventListener('click',function(){   
    number1 = parseFloat(document.getElementById('number1').value) || 0;
    number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = 'result';

});

function subtract(number1, number2){ 
    return number1 - number2;
};

const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click',function(){   
    number1 = parseFloat(document.getElementById('number1').value) || 0;
    number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = 'result';

});

function multiply(number1, number2){ 
    return number1 * number2;
};

const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click',function(){   
    number1 = parseFloat(document.getElementById('number1').value) || 0;
    number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = 'result';

});

function divide(number1, number2){ 
    return number1 / number2;
};

const divideBtn = document.getElementById('divide');
addBtn.addEventListener('click',function(){   
    number1 = parseFloat(document.getElementById('number1').value) || 0;
    number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = 'result';

});

