import React from 'react'; 
import './main.css';
import Tab from './tab';
class Main extends React.Component{
   constructor(){
       super();
       this.state={
           data :[
                {index:1,date:'2017年2月27日', title:'如何理解 redux 的单向数据流',},
                {index:2,date:'2017年2月27日', title:'如何把 sketch 中的图片导出给开发者？',},
                {index:3,date:'2017年2月27日', title:'如何把 sketch 中的图片导出给开发者？',},
                {index:4,date:'2017年2月27日', title:'如何用 Sketch 画出好奇猫 logo ？',},
                {index:5,date:'2017年2月27日', title:'如何用 Sketch 把一个普通的 png 变成 SVG ？',},
                {index:6,date:'2017年2月27日', title:'好奇猫工作室的三个主要业务方向是什么？',},
                {index:7,date:'2017年2月27日', title:'如何做出自己的 echarts ？(第二部分)',},
                {index:8,date:'2017年2月27日', title:'如何做出自己的 echarts ？',},
                {index:9,date:'2017年2月27日', title:'百度的 echarts 好用么？',},
                {index:10,date:'2017年2月27日', title:'材料设计的色盘如何使用？',}
           ]
       }
   }
    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type='text'></input>
                        <button>搜索</button>
                    </div>
                </form>
				{/*{this.state.data.map(item => <Tab key={item.index} {...item}/>)}*/}
				<Tab data={this.state.data}/>
            </div>
        )
    }
}
export default Main;
//var arr=['如何理解 redux 的单向数据流？','如何把 sketch 中的图片导出给开发者？','如何把 sketch 中的图片导出给开发者？','如何用 Sketch 画出好奇猫 logo ？','如何用 Sketch 把一个普通的 png 变成 SVG ？','好奇猫工作室的三个主要业务方向是什么？','如何做出自己的 echarts ？(第二部分)','如何做出自己的 echarts ？','百度的 echarts 好用么？','材料设计的色盘如何使用？','如何部署一个静态网站到 aliyun+ubuntu+nginx 环境','工程师如何做设计?','什么是谷歌的材料设计?','如何用 Webpack+Babel 来编译 ES6 ?']
//
//var arr1=['2017年4月11日','2017年2月27日','2017年2月26日','2017年2月25日','2017年2月24日','2017年2月21日','2017年2月20日','2017年2月19日','2017年2月18日','2017年2月17日','2017年2月16日','2017年2月15日','2017年2月14日','2017年2月13日',]
//var num=arr.length;
//class Tab extends React.Component{
//    constructor(){
//        
//     }
//    
////    this.arr.map(function(val,index){
////            console.log(val)
////            })
//}
