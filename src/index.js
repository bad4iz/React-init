import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './components/button';
import {List} from './components/list';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            text: '',
            timer: 0,
            array:[
                {id: 1, name: 'Вася'},
                {id: 2, name: 'Дима'},
                {id: 3, name: 'Федя'},
                {id: 4, name: 'Филимон'}
            ]
        };
    }
    
    componentWillMount() {
        setInterval(()=> {
            this.setState({timer: this.state.timer < 100 ? this.state.timer + 1 : 0});
        }, 100);
    }
  
    handleChange(e) {
        const text = e.target.value;
        this.setState({ text });
    }
    
    render() {
        return (
       <div className="demo-card-event mdl-card mdl-shadow--2dp" style={{margin: '100px auto', padding: '20px'}}>
           <p>{this.state.timer}</p>
           <h1 style={{margin: ' auto'}}>Прювет !</h1>
           
           <List />
           
           <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
             <input  onChange={this.handleChange.bind(this)}  className="mdl-textfield__input" type="text" id="sample3"/>
               <label className="mdl-textfield__label" htmlFor="sample3">Введите текст...</label>
           </div>
           <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
               <p>{this.state.text}</p>
           </div>
           <div className="mdl-card__actions mdl-card--border">
               {this.state.timer < 50 ? <Button btnText="Нажми кнопку"/>: null}
           </div>
       </div>);
    }
}

ReactDOM.render(
   <App/>,
   document.getElementById('app')
);
