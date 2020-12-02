import React, { Component } from 'react'
import axios from 'axios' 


 class Blogs extends Component {

    state={
        data:[],
        page:1,
        perPage:10,
        loading:true,
        totalPages:1,
    }

    componentDidMount=()=>{

        axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/posts?page=1&per_page=10").
        then(res=>{
            console.log(res.headers["x-wp-totalpages"]);
          this.setState({data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"]});
        })

    }

    componentDidUpdate=()=>{
      
        if(this.state.loading)
       {
            axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage).
        then(res=>{
           
          this.setState({data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"]});
        })
    }
    }
    

    pageHandler=(val)=>{
        
        this.setState((state)=>{return {
            page:state.page+val,
            loading:true,
        }})

    }
 


    render() {
        return (
            <div>
                {this.state.data.map(blog=>{
                    return (
                    <>
                    
                    <h1>{blog.title.rendered}</h1>
                    <td dangerouslySetInnerHTML={{__html:blog.content.rendered}} />
                    <br/>
                    <br/>
                    </>
                )})}

                <button onClick={()=>this.pageHandler(-1)} disabled={this.state.page===1}>{"<"}</button>
                {this.state.page}/{this.state.totalPages}
                <button onClick={()=>this.pageHandler(1)} disabled={this.state.totalPages===this.state.page} >{">"}</button>
                
                <select onChange={(e)=>{
                    this.setState({
                             perPage:e.target.value,
                             loading:true,
                         })}
                 }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option selected value="10">10</option>
                </select>
                
            </div>
        )
    }
}


export default Blogs;