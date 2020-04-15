import React from 'react';


class Display extends React.Component {
    render () {
        return (
            <div id='display'>
                <p>{this.props.input}</p>
                <p>{this.props.output}</p>
            </div>
        );
    }

}

export default Display;