import React from 'react';
let topStyle={
        marginLeft:'45px',
        lineHeight:'80px',
        fontWeight:'bolder',
        fontSize:'30px',
        color:'white',
        
    }
class Header extends React.Component{
    
    render(){
        return(
            <div style={{background:'#00bcd4'}}>
                <a href="#" style={topStyle}>首页</a>
            </div>
        )
    }
}

export default Header;
