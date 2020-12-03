import React, { Component } from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'


 class Blogs extends Component {

    state={
        data:[],
        categories:[],
        page:1,
        perPage:10,
        loading:true,
        totalPages:1,
        selectedCategory:null,
    }

    componentDidMount=()=>{

        axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/posts?page=1&per_page=10").
        then(res=>{
            
          this.setState({data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"]});
        });

        axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/categories").
        then(res=>{
          this.setState({categories:res.data});
        })

    }

    componentDidUpdate=()=>{
      
        if(this.state.loading)
       {

        if(this.state.selectedCategory===null)
            axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage).
        then(res=>{
           
          this.setState({data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"]});
        })

        else
        axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage+"&categories="+this.state.selectedCategory).
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


    categoryHandler=(id)=>{
        this.setState({selectedCategory:id,loading:true,page:1});
    }
 


    render() {
        return (
            <div>


                {this.state.data.map(blog=>{
                    return (
                    <>
                    
                    <h1>{blog.title.rendered}</h1>
                    <td dangerouslySetInnerHTML={{__html:blog.content.rendered}} />
                    <Link to={"/blog/"+blog.id}>read more</Link>
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



                <p onClick={()=>this.categoryHandler(null)}>All</p>
                {this.state.categories.map(category=><p onClick={()=>this.categoryHandler(category.id)}>{category.name}</p>)}
                
            </div>
        )
    }
}


export default Blogs;