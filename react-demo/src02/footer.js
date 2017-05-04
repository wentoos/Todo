import React from 'react';
import {blueStyle} from './theme.js';
import bg from './bgc.jpg';

// class Footer extends React.Component {

//  	render () {
//  		let style ={
//  			common:{
//  				fontSize:'32px',
//  				color:'red'
//  			},
//  			spec:{
//  				color:blueStyle
//  			}
//  		}
// 	 	return (

// 	 		<div style={Object.assign({},style.common,style.spec),{background:`url(${bg}) no-repeat`}}>我是腿</div>
// 	 	)
//  	}
//  }
 class Footer extends React.component {
 	constructor (){
 		super();
 		this.state = {
 			num : 0
 		}
 		return (
 				<div>我是：{this.state.num}</div>
 			)
 	}
 }
export default Footer;