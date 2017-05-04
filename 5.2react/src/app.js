import React from 'react';
import Btn from './btn';

class App extends React.Component{
	constructor(props){
		super(props);
		console.log('contructor')
		console.log(this.props)
		this.state = {
			num:0,
			name:this.props.name
			//{/*想要在这个位置用父级传给子集的props 可在上方强行呼叫props*/}
		}
	}
	componentWillMount(){
		console.log('will mount')//{/*渲染加载前 执行*/}
	}
	shouldComponentUpdate(){
		console.log('组件是否更新')
		return this.state.num <10 ? true : false
		//必须有返回值 而且必须是true 或 false
		
	}
	componentWillUpdate(nextProps, nextState){
		console.log('组件准备更新')
		console.log(nextProps, nextState)
		//传进的参数 更新之前触发
	}
	componentDidUpdate(prevProps, prevState){
		console.log('组件更新完毕')
		console.log(prevProps, prevState)
		//传进的参数 更新之后触发之前的值
	}
	render(){
		console.log(this.state.num)
		console.log('render')
		return(
			<div>
				{this.state.num}
				<button onClick={()=>this.setState({num:this.state.num+1})}>+1</button>
				<Btn num={this.state.num}/>
			</div>
		)
	}
	componentDidMount(){
	
	}
}
export default App;
//触发组件更新阶段的条件 props 或者 state 改变