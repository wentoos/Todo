import React from 'react';
//import PropTypes from 'prop-types';

class Btn extends React.Component{
	constructor(){
		super()
		console.log('a')
		this.state={
			destroy:false//状态
		}
	}
	componentWillReceiveProps(nexProps){
		console.log('是否收到父级传输的Props属性')
	}
	componentWillUnmount(){
		console.log('将要消毁的组件')
	}
	render(){
		return(
			<div>
				<button onClick={()=>this.setState({destroy:true})}>删除</button>
				{this.state.destroy ? null : <div>test下的NUM:{this.props.num}</div>}
			</div>
//			<button style={{padding:`${this.props.pad}`}}>{this.props.title}</button>
		)
	}
}
//Btn.defaultProps ={
//    title:'默认',
//    pad:'50px'
//}
//Btn.propTypes ={
//    title:PropTypes.string,
//    pad:PropTypes.string
//}
export default Btn;