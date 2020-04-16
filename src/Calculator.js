import React from 'react';
import Display from './Display';
import Button from './Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {add, subtract, multiply, divide, evaluate, clear, append} from './redux/actions';
import './Calculator.css';

const buttonsMap = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'add': '+',
    'subtract': '-',
    'multiply': '*',
    'divide': '/',
    'decimal': '.',
    'equals': '=',
    'clear': 'AC',
};

class Calculator extends React.Component {

    handleClick = (id) => {
        switch (id){
            case 'add':
                this.props.add();
                break;
            case 'subtract':
                this.props.subtract();
                break;
            case 'multiply':
                this.props.multiply();
                break;
            case 'divide':
                this.props.divide();
                break;
            case 'equals':
                this.props.evaluate();
                break;
            case 'clear':
                this.props.clear();
                break;
            case 'zero': case 'one': case 'two': case 'three': case 'four': case 'five': 
            case 'six': case 'seven': case 'eight': case 'nine': case 'decimal':
                this.props.append(buttonsMap[id]);
                break;
            default:
                console.warn('Got unexpected id from click');

        } 
    }

    renderButton = (id) => {
        return (
            <Button 
                id={id} 
                value={buttonsMap[id]} 
                onClick={() => this.handleClick(id)}
            />
        );
    }

    render( ) {
        return (
            <div id='calculator-container' class='container'>
            <Display 
                input={this.props.input} 
                output={this.props.output} />
            {this.renderButton('clear')}

            {this.renderButton('seven')}
            {this.renderButton('eight')}
            {this.renderButton('nine')}
            {this.renderButton('divide')}

            {this.renderButton('four')}
            {this.renderButton('five')}
            {this.renderButton('six')}
            {this.renderButton('multiply')}

            {this.renderButton('one')}
            {this.renderButton('two')}
            {this.renderButton('three')}
            {this.renderButton('subtract')}

            {this.renderButton('zero')}
            {this.renderButton('decimal')}
            {this.renderButton('equals')}
            {this.renderButton('add')}

            </div>
        );
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ add, subtract, multiply, divide, evaluate, clear, append }, dispatch);
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Calculator)
  