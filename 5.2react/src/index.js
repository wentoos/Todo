import React from 'react';
import Form from './form';
import ReactDOM from 'react-dom';
//import App from './app.js';


class Html extends React.Component{
//    constructor(){
//        super();
//       
//    }
    render(){
        return(
            <div>
                <Form />
            </div>
        )
    }
}

ReactDOM.render(<Html />,document.querySelector('#root'))  
