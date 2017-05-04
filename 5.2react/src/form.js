import React from 'react';

class Form extends React.Component{
	constructor(){
		
		super();
		this.state={
			textarea:'',
			select:'3',
			radio:'girl',
			checkbox:true,
			input:''
		}
	}
	handleSubmint(e){
		e.preventDefault()
		e.target.reset()//提交之后清空
	}
	handles(e){
		let target = e.target;
		console.log(target.name);
		let value = (target.name==='checkbox' ? target.checked : target.value)
		this.setState({
			[target.name]:target.value
		})
		
	}
//	handleTextarea(e){
//		this.setState({textarea:e.target.value})
//	}
//	handleOnChange(e){
//		this.setState({input:e.target.value})
//	}
//	handleSelect(e){
//		this.setState({select:e.target.value})
//	}
//	handleRadio(e){
//		this.setState({radio:e.target.value})
//	}
//	handleCheck(e){
//		this.setState({checkbox:e.target.checked})
//	}
    render(){
        return(
            <div>
                <form  onSubmit={this.handleSubmint.bind(this)}>
					<input  value={this.state.input} onChange={this.handles.bind(this)} name='input'/>
					<textarea  value={this.state.textarea} onChange={this.handles.bind(this)} name='textarea'/>
					<select value={this.state.select} onChange={this.handles.bind(this)} name='select'>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>
					
					<input type='checkbox' checked={this.state.checked} onChange={this.handles.bind(this)} name='checkbox'/>
					<button>提交</button>
				</form>
            </div>
        )
    }
}
export default Form;
//action='' method=''


//表单 设置value时与原生不同 只能用新的方式书写

//可控方法

//设置value为state 通过调节state的onChange事件改变修改，如下
//<input placeholder='name' value={this.state.input} onChange={this.handleOnChange.bind(this)}/>
//

//不可控

//<input defaultValue='默认值' ref={(input)=>this.input=input}/>获得他的值 可以用原生找到dom节点、react或者jq都可以
//男
//					<input type='radio' name='sex' checked={this.state.radio==='boy'?} onChange={this.handleRadio.bind(this)} value='boy'/>
//					女
//					<input type='radio' name='sex' checked={this.state.radio==='girl'?} onChange={this.handleRadio.bind(this) value='girl'/>


