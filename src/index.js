import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './components/button';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            text: 'ytyf'
        };
    }
  
    handleChange(e) {
        const text = e.target.value;
        this.setState({ text });
    }
    
    render() {
        return (
       <div className="demo-card-event mdl-card mdl-shadow--2dp" style={{margin: '100px auto', padding: '20px'}}>
           <h1 style={{margin: ' auto'}}>Прювет !</h1>
           <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
             <input value={this.state.text} onChange={this.handleChange}  className="mdl-textfield__input" type="text" id="sample3"/>
               <label className="mdl-textfield__label" htmlFor="sample3">Введите текст...</label>
           </div>
           <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
               <p>{this.state.text}</p>
           </div>
       </div>);
    }
}

ReactDOM.render(
   <App/>,
   document.getElementById('app')
);
