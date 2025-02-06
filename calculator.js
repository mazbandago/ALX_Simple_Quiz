// const number1 = document.querySelector('#number1');
// number1.getAttribute('number');

// const number2 = document.querySelector('#number2');
// number2.getAttribute('number');

function add(number1, number2){ 
    return number1 + number2;
};

 document.getElementById('add').addEventListener('click',function(add){   
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = 'result';

});

function subtract(number1, number2){ 
    return number1 - number2;
};

document.getElementById('subtract').addEventListener('click',function(subtract){   
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = 'result';

});

function multiply(number1, number2){ 
    return number1 * number2;
};

 document.getElementById('multiply').addEventListener('click',function(multiply){   
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = 'result';

});

function divide(number1, number2){ 
    return number1 / number2;
};

document.getElementById('divide').addEventListener('click',function(divide){   
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = 'result';

});

