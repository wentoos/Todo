import React from 'react';

class Home extends React.Component{
	componentDidMount(){
//		alert('气不气')
//		setTimeout( ()=>{
//			this.props.history.push('/about')
//		},2000 )
	}
	
	handle(){
		console.log(this.props)
		this.props.history.goBack()
	}
	render(){
		return(
			<div>home
				<button onClick={this.handle.bind(this)}>点击</button>
			</div>
		)
	}
}
export default Home;