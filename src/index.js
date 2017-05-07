import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    
    handleClick(e) {
        console.log(e.target);
    }
  
    handleChange(e) {
        console.log(e.target.value);
    }
    
    render() {
        return (
       <div className="demo-card-event mdl-card mdl-shadow--2dp" style={{margin: '100px auto'}}>
         <div className="mdl-card__title mdl-card--expand">
           <h1>App Works!</h1>);
         </div>
         <div className="mdl-card__actions mdl-card--border">
           <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
             <input onChange={this.handleChange} className="mdl-textfield__input" type="text" id="sample3"/>
               <label className="mdl-textfield__label" htmlFor="sample3">Введите текст...</label>
           </div>
           <button onClick={this.handleClick} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
             Add to Calendar
           </button>
         </div>
       </div>);
    }
}

ReactDOM.render(
   <App/>,
   document.getElementById('app')
);
