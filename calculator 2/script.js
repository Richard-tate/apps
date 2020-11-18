let startingTotal = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
   if(isNaN(value)){
    //  not a number //
    handleSymbol(value);
   }
   else{
    // is a number //   
    handleNumber(value);
   }
   screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch (symbol){
        case 'C':
            buffer = '0';
            startingTotal = 0;
            break;
        case '=':
            if(previousOperator === null){
                return;
            }    
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = startingTotal;
            startingTotal = 0 ;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.substring(0, buffer.length -1);
            }
            break;
        case '+':
        case '−':
        case '×': 
        case '÷':       
            handleMath(symbol);
            break;
    }
}

function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}
function handleMath(symbol){
    if(buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);

    if(startingTotal === 0) {
        startingTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousOperator === '+'){
        startingTotal += intBuffer;
    }else if(previousOperator === '−'){
        startingTotal -= intBuffer;
    }else if(previousOperator === '×'){
        startingTotal *= intBuffer;
    }else  {
        startingTotal /= intBuffer;
    }
}

function init (){
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    });
}

init();