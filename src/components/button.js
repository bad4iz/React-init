/**
 * Created by bad4iz on 08.05.2017.
 */
import React, { PropTypes, Component } from 'react';

export class Button extends Component {
    
    static propTypes = {
        btnText: PropTypes.string.isRequired
    };
    
    static defaultProps = {
        btnText: 'нажми на меня'
    };
    
    handleClick(e) {
        console.log(e.target.value);
    }
    
    render() {
        return (
            <button onClick={this.handleClick}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                {this.props.btnText}
            </button>
        );
    }
}
