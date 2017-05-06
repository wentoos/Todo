import React from 'react';

class Work extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>我是3
				{this.props.match.params.work}
			</div>
		)
	}
}
export default Work;