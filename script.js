
const result = document.querySelector('#current')
const total = document.querySelector('#total')
const mr = document.querySelector('#mr')
const restart = document.querySelector('#restart')
const sqrt = document.querySelector('#square-root')
const square = document.querySelector('#square')
const clean = document.querySelector('#clear')
const percentage = document.querySelector('#percentage')
const divide = document.querySelector('#divide')
const times = document.querySelector('#times')

const subtract = document.querySelector('#mins')

const addition = document.querySelector('#add');

const equal = document.querySelector('#equal');
const zero = document.querySelector('#zero');
const point = document.querySelector('#dot');

//FOR COMMER
function commar(num)  {
    if (num == '-') {
      return '';  
    }
    let shift = Number(num);
    let value = shift.toLocaleString('en');
    return value;
}


function getResult() {
    return result.innerText;
}



const printResult = (num) => {
    result.innerText = num
}
// printResult('5+5');


function getTotal() {
    return total.innerText;
}


const printTotal = (num) => {
    if (num == '') {
        total.innerText = num
    } else {
        total.innerText = commar(num)
    }
    
};
// printTotal('5335456')


function refresh(num) {
    return Number(num.replace(/, /g, ''));

};
// alert(refresh(getTotal()));

const operators = document.querySelectorAll('.operators');
for (let i = 0; i < operators.length; i++) {
    // console.log(operators[i])
    operators[i].addEventListener('click',function() {
        if (this.id =='clear') {
            printResult('');
            printTotal('');
        }
        else if (this.id == 'backspace') {
            let output = refresh(getTotal()).toString();
            if(output) {
                output = output.substr(0,output.length - 1);
                printTotal(output);
            }
            
        } 
        else {
            let output = getTotal();
            let history = getResult();
            if(output == '' && history != ''){
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0,history.length - 1);
                }
            }
            if(output != '' || history != '') {
                output = output == '' ? output : refresh(output);
                history = history + output;
                if (this.id  == '=') {
                    
                
                let result = eval(history);
                printTotal(result);
                printResult('')
            }
            else{
                history = history+this.id;
                printResult(history);
                printTotal('')
            }
            }
        }
    });
    
}

const numbers = document.querySelectorAll('.numbers');
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
    numbers[i].addEventListener('click',function() {
        let output = refresh(getTotal());
        if (output != NaN) {
            output = output + this.id;
            printTotal(output);
            
        } 
        
    });
    
}


