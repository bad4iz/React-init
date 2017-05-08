import React, {PropTypes, Component} from 'react';

export class List extends Component {
    static propTypes = {
        array: PropTypes.array.isRequired
    };
    
    static defaultProps = {
        array: [{id: 1, name: 'пока никого нет'}]
    };
    
    renderItem(item, idx) {
        const listSwitch = 'list-switch-' + idx;
        return ( <li key={idx} className="mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                        {item.name}
                    </span>
                    <span className="mdl-list__item-secondary-action">
                      <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor={listSwitch} >
                        <input type="checkbox" id={listSwitch} className="mdl-switch__input" />
                      </label>
                    </span>
        </li>);
    }
    
    render() {
        return (
            <ul className="mdl-list">
                {this.props.array.map(this.renderItem.bind(this))}
                
            </ul>
        
        );
    }
}
