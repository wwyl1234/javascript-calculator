
const initialState = {
    input: [], 
    output: 0,
}

const calculator = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD':
            return {
                input: state.input === [] ? ['ADD'] : state.input.push('ADD'),
                output: state.output,
            
            }
    
        case 'SUBTRACT': 
            return {
                input: state.input === [] ? ['SUBTRACT'] : state.input.push('SUBTRACT'),
                output: state.output,
               
            }

        case 'MULTIPLY': 
            return {
                input: state.input === [] ? ['MULTIPLY'] : state.input.push('MUTLIPLY'),
                output: state.output,
               
            }

        case 'DIVIDE': 
            return {
                input: state.input === [] ? ['DIVIDE'] : state.input.push('DIVIDE'),
                output: state.output,
                
            }

        case 'EQUALS': 
        // TODO
        // does the calculation
            return {
                input: [],
                output: state.output,
              
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
            newInput.push(action.type);
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

  
  
  export default calculator