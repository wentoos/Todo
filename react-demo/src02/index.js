import React from 'react';
import ReactDOM from 'react-dom';

// import Hello from './app.js';

// let age =666;
// let hello = <p className='aaa'>hello world{age*1200}</p>;
// ReactDOM.render(hello, document.getElementById('root'))
// let Hello_=React.createClass({
// 	render: function () {
// 		return (
// 			<div>我是第一个方法，即将消失</div>
// 		)
// 	}
// })
// ReactDOM.render(<Hello_></Hello_> , document.getElementById('root'));
// function Hi(){
// 	return (
// 			<div>嵌套</div>
// 			)
// }
 class Go extends React.Component {
 	constructor(){
 		super();
	 		this.state = {
	 			num : 0,
	 			tab : 0,
	 			show: true
	 		}
 		}
 		click(){
 			this.setState({
 					show: !this.state.show
 			})
 		}
 		handletab(tab){
 			this.setState({tab:tab})
 		}
 		render(){
 			let boxStyle = {
 				width: '100px',
 				height:this.state.show ? '100px' : '0px',
 				background:'red',
 				transition:"height 1s"
 			}
	 		return (
		 			<div>
		 				<button onClick={this.click.bind(this)}>点击</button><br />
		 				<button onClick={this.handletab.bind(this,0)}>苹果</button>
		 				<button onClick={this.handletab.bind(this,1)}>香蕉</button>
		 				<button onClick={this.handletab.bind(this,2)}>鸭梨</button>
		 				<br />
		 				{
		 					this.state.tab === 0 ? 'PINGGUO' : this.state.tab === 1 ? 'xhangjiao' : 'yali'
		 				}
		 				<div style={boxStyle}/>
		 			</div>
	 			)
 		}
 	
 }
 ReactDOM.render(<Go /> , document.getElementById('root'))

// let c ={a:1};
// let s ={b:2};
// let e ={c:3};
// Object.assign(c,s,e);
// console.log(c);
//对象的合并 合并到 目标对象中，
