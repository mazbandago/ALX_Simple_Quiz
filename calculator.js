const number1 = document.querySelector('#number1');
number1.getAttribute('number');

const number2 = document.querySelector('#number2');
number2.getAttribute('number2');

function add(number1, number2){ 
    return number1 + number2;
};

results = add();

const Add = document.querySelector('#add');
add.