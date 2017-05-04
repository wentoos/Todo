import React from 'react';

import Header from './header.js';
import Footer from './footer.js';

import  './style.css';



class Hello extends React.Component {
	style (){
		return ({

 			textAlign: 'center',
 			
		})
	}
 	render () {
 		
	 	return (
			 		<div>
				 		<Header />
				 		<Footer />
			 		</div>
	 			)
 	}
 }
export default Hello;