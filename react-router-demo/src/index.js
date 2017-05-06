import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

function Html ({title}){

	return(
		<App />
	)
}
ReactDOM.render(<Html/>,document.getElementById('root'))