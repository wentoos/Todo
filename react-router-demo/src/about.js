import React from 'react';
import {Route, Link} from 'react-router-dom';
const Yu = () => <h1>yu</h1>
const Wen = () => <h1>wen</h1>
const Tong = () => <h1>tong</h1>
class About extends React.Component{
	render(){
		
		return(
			<div>
				<div>about</div>
				<Link to={`${this.props.match.url}`}>yu</Link>
				<Link to={`${this.props.match.url}/wen`}>wen</Link>
				<Link to={`${this.props.match.url}/tong`}>tong</Link>
				<Route exact path={`${this.props.match.url}`} component={Yu}/>
				<Route path={`${this.props.match.url}/wen`} component={Wen}/>
				<Route path={`${this.props.match.url}/tong`} component={Tong}/>
			</div>
		)
	}
}
export default About;