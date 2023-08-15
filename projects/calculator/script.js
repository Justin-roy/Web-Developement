let buttonClick = document.getElementById('btn_click');
function calculate(key,a,b)
{
    switch (key) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'X':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            break;
    }
}

buttonClick.onclick = function(){
    let key = buttonClick.value;
   console.log(key);
    // calculate();
}