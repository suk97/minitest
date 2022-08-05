
// result
function inputNum(num) {
    const result = document.getElementById('result-input');
    result.value += num;
};

function inputOperator(text) {
    const oper = document.getElementById('result-input');
    oper.value += text;
}

function calculate(n1, operator, n2) {
    let result = 0;
    return String(result);
  }

function calculate(n1, operator, n2) {
    let result = 0;
    if(operator === '+'){
      result = Number(n1) + Number(n2);
    } else if(operator === '-'){
      result = Number(n1) - Number(n2);
    } else if(operator === '*'){
      result = Number(n1) * Number(n2);
    } else if(operator === '/'){
      result = Number(n1) / Number(n2)
    }
    return String(result);
}