import React from 'react';
import Home from './home';
import About from './about';
import Work from './work';
import Text from './text';
import './style.css';
import {HashRouter, Route, Link, Redirect,Switch,NavLink} from 'react-router-dom';
const NotFound = () => <h1>页面跑丢了</h1>
class App extends React.Component{
	constructor(){
		super()
		this.state={
			admin:true
		}
	}
	render(){
		return(
			<HashRouter>
				<div>
					<NavLink to='/' exact>首页</NavLink>
					<NavLink to='/about'>about</NavLink>
					<NavLink to='/work'>work</NavLink>
					<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' render={(props)=> this.state.admin ? <About {...props}/> : <Redirect to='/'/>}/>
					<Route path='/work' component={Work}/>
					<Redirect from='/old' to='/:work'/>
					<Route component={NotFound}/>
					</Switch>
					<Text />
				</div>
			</HashRouter>
		)
	}
}
export default App;