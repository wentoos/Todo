import React from 'react';
import ReactDOM from 'react-dom';
import './main.css'
//class App extends React.Component {
//	constructor(){
//		super();
//		this.state={num:0}
//	}
//	startCount(){
//		console.log(1)
//		setInterval(() => this.seteState({num:this.state.num+1}),1000)
//		
//	}
//	render(){
//		return(
//			<div>
//				{this.state.num}<br />
//				<button onClick={this.startCount.bind(this)}>开始</button>
//			</div>
//		)
//	}
//}
let arr=['香蕉','苹果','包子','饼','米饭','咸菜','西瓜','葡萄']
class App extends React.Component {
	constructor(){
		super();
		this.state={
			start:false,
			car:'请开始你表演',
			what:[]
		}
		
	}
	getRandom(m,n){
		return Math.floor(Math.random()*(n-m)+m)
	}
	renderBg(){
		let oldWhat =this.state.what;
		console.log('1')
		for(var i=0; i<oldWhat.length;i++){
			if(oldWhat[i].opacity<=0){
				oldWhat.splice(i,1);
				i--
			}else{
				oldWhat[i].opacity -=10
			}
		}
		if(this.state.start && oldWhat.length<10){
			
			oldWhat=[
				...oldWhat,{
						top:this.getRandom(0,100),
						left:this.getRandom(0,100),
						opacity:100,	
						title:arr[Math.floor(Math.random()*arr.length)],
						id:Date.now()
				}
			]
		}
		 //oldWhat.length===0 && clearInterval(this.bgOver);
		if(oldWhat.length===0){
			clearInterval(this.bgOver)
			console.log('2')
		}
		this.setState({what:oldWhat});	
	}
	handleStart(){
		clearInterval(this.catOver)
		if(!this.state.start){
			this.catOver =setInterval(()=>{
				this.setState({
					car:arr[Math.floor(Math.random()*arr.length)]})
			},100)
			this.bgOver = setInterval(()=>this.renderBg(),500)
		}
		this.setState({start:!this.state.start})
		
	}
	render(){ 
		
		return(
			<div className='play'>
				{
					this.state.what.map(item =>
					<p key={item.id} style={{top:`${item.top}vh`,left:`${item.left}vw`,opacity:`${item.opacity/100}`}}>{item.title}</p>
					)
				}
				<div>
					<h1>今天开啥车：{this.state.car}</h1>
					<button onClick={this.handleStart.bind(this)}>{this.state.start? '停止':'开始'}</button>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<App />,document.querySelector('#root'))