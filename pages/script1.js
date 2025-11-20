ore = 999;

function assenze() {
    n = parseInt(document.getElementById("progresso").value);
    console.log(n);
    assenze = n * 6;
    ore_assenti = ore - assenze;
    percentuale = (100 * ore_assenti)/ore;
    console.log(percentuale);
    document.getElementById("barra").style.width = percentuale + "%";
}


const display = document.getElementById('display');

let current = '';   
let previous = '';  
let operator = null;

function updateDisplay() {
    if (current !== '') {
        display.textContent = current;
    } else if (previous !== '') {
        display.textContent = previous;
    } else {
        display.textContent = '0';
    }
}

document.querySelectorAll('.btn.num').forEach(btn => {
    btn.addEventListener('click', () => {
        const digit = btn.dataset.number;
        if (current === '0') current = '';
        current += digit;
        updateDisplay();
    });
});

document.querySelector('.btn.dot').addEventListener('click', () => {
    if (!current.includes('.')) {
        if (current === '') current = '0';
        current += '.';
        updateDisplay();
    }
});

document.querySelectorAll('.btn.op').forEach(btn => {
    btn.addEventListener('click', () => {
        const op = btn.dataset.op;

        if (current === '' && previous === '') return;

        if (previous === '') {
            previous = current;
            current = '';
        } else if (current !== '') {
            compute();
        }

        operator = op;
    });
});

document.querySelector('.btn.equal').addEventListener('click', () => {
    if (current === '' || previous === '' || !operator) return;
    compute();
    operator = null;
});

document.querySelector('.btn.clear').addEventListener('click', () => {
    current = '';
    previous = '';
    operator = null;
    updateDisplay();
});

function compute() {
    const a = parseFloat(previous);
    const b = parseFloat(current);
    let result = 0;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b === 0 ? 'Errore' : a / b;
            break;
    }

    previous = String(result);
    current = '';
    updateDisplay();
}
