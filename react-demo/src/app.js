import React from 'react';

import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import Child from './child.js';
import './reset.css';
class App extends React.Component{

	render(){
		return(
			<div>
				<Header />
                <Main />
				<Child>
					<p>1</p>
					<p>1</p>
					<p>1</p>
				</Child>
                <Footer />
			</div>
		)
	}
}
export default App;

//	handleClick(){
//		$('#text').hide('slow');
//		$(this.input).focus()
//	}