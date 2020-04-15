import * as actionConstants from './actionTypes';


export const add = () => ({
    type: actionConstants.ADD
});

export const multiply = () => ({
    type: actionConstants.MULTIPLY
});

export const subtract= () => ({
    type: actionConstants.SUBTRACT
});

export const divide = () => ({
    type: actionConstants.DIVIDE
});

export const evaluate = () => ({
    type: actionConstants.EQUALS
});

export const clear = () => ({
    type: actionConstants.CLEAR
});

export const append = (id) => ({
    type: actionConstants.APPEND,
    value: id,
});