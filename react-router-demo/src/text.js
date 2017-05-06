import React from 'react';
import { withRouter } from 'react-router';
class Text extends React.Component{
	render(){
		console.log('text......',this.props)
		return(
			<div>
				我是text
			</div>
		)
	}
}
export default withRouter(Text);