
const initialState = {
    input: [], 
    output: 0
}

const calculator = (state = initialState , action) => {
    let oldInput = state.input.slice();
    console.log(state);
    switch (action.type) {
        case 'ADD':
            oldInput.push('+');
            return {
                input: state.input.length === 0 ? [] : oldInput,
                output: state.output,
            }
    
        case 'SUBTRACT': 
            oldInput.push('-');
            return {
                input: state.input.length === 0  ? ['-'] : oldInput,
                output: state.output,
            }

        case 'MULTIPLY': 
            oldInput.push('*');
            return {
                input: state.input.length === 0  ? [] : oldInput,
                output: state.output,
            }

        case 'DIVIDE': 
            oldInput.push('/')
            return {
                input: state.input.length === 0 ? [] : oldInput,
                output: state.output,
            }

        case 'EQUALS': 
            return {
                input: state.input,
                output: evaluateExpression(state.input),
            }

        case 'CLEAR': 
            return {
                input: [],
                output: 0,
            }
            
            case 'APPEND': 
            let newInput;
        
            // case 1 : input is []
            if (state.input === []) {
                newInput = [String(action.value)];
            }
            // case 2: input previous element is not number nor decimal
            else if (state.input[state.input.length - 1] !== "." && isNaN(state.input[state.input.length - 1]) === true ){
                newInput = state.input.slice();
                newInput.push(String(action.value));
            }
            // case 3: input previous element is a number or a decimal 
            else {
                let prevElem = state.input[state.input.length - 1];
                // invalid case : current element is decimal and there is already a decimal point
                if (prevElem.includes('.') && action.value === '.') {
                    return state;    
                }
                // invalid case : input previous element starts with 0 and current element is 0 
                if (prevElem.length === 1 && prevElem[0] === '0' &&  action.value === 0){
                    return state;
                }
    
                let newLastElem = prevElem + String(action.value);
                newInput = state.input.slice(0, state.input.length - 1);
                newInput.push(newLastElem);
            } 
            return {
                input: newInput,
                output: state.output,
            }
        
        default:
            return state;
    }
  }
  
const evaluateExpression = (input) => {
    let copyInput = input.slice();
    if (copyInput.length === 0){
        return '0';
    }
    let result = copyInput.shift();
    let lastOp = null;
    let secondLastOp = null;

    while (copyInput.length !== 0){
         let currentElem = copyInput.shift();
         // Case 1: currentElem is a number
         if (!isNaN(currentElem)){
            if  (lastOp === '-'){
                currentElem = '-1*' + currentElem;
                if (secondLastOp === null) {
                    result = String(eval(result + currentElem)); 
                }
                else {
                    result = String(eval(result + secondLastOp + currentElem)); 
                }

            } else {
                result = String(eval(result + lastOp + currentElem)); 
            }
         }
         // Case 2: currentElem is an operation
         else {
             secondLastOp = lastOp;
             lastOp = currentElem;
         }
    }
    return result 
}

export default calculator