import React from 'react';
import './Display.css';

class Display extends React.Component {
    render () {
        return (
            <div id='display'>
                <p id='input'>{this.props.input}</p>
                <p id='output'>{this.props.output}</p>
            </div>
        );
    }

}

export default Display;