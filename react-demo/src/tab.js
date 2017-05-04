import React from 'react'; 


class Tab extends React.Component{
   	

    render(){
		let {data} = this.props
		console.log(data)
		let tabs =data.map(item =>
						   <a href='#' key={item.index}> 
							    <span className='left'>{item.index}</span>
								<span className='right'>{item.title}
									<span className="date">{item.date}</span>
								</span>
						   </a>
						  )
		
        return(
            <div>
                <div className='seach_txt'>
                    <div className='box'>
 					{tabs}
                    </div>
                </div>
            </div>  
        )
    }
}
Tab.defaultProps ={
    index:0,
    title:'文章题目',
    date:'2017年4月30日'
}
export default Tab;