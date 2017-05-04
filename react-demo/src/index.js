import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
class Html extends React.Component{
    
    render(){
      return(
      <App />
      )  
    }
}

ReactDOM.render(<Html />,document.querySelector('#root'))  