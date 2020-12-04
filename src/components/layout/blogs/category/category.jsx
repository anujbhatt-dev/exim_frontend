import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'


class Category extends Component {


    state={
        data:[],
        categories:[],
        page:1,
        perPage:10,
        loading:true,
        totalPages:1,
        tags:[],
        total:0,
    }


    componentDidMount=()=>{

        console.log(this.props.match.params.id);

       this.setState({selectedCategory:this.props.match.params.id,loading:true})
       
    }

    componentDidUpdate=()=>{

        if(this.state.selectedCategory!== this.props.match.params.id)
        this.setState({selectedCategory:this.props.match.params.id,page:1,loading:true})

      
        if(this.state.loading)
       {

        if(this.state.selectedCategory===undefined)
            axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage).
        then(res=>{
           
          this.setState({selectedCategory:this.props.match.params.id,data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"],total:+res.headers["x-wp-total"]});
        })

        else
        axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage+"&categories="+this.props.match.params.id).
    then(res=>{
       
      this.setState({selectedCategory:this.props.match.params.id,data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"],total:+res.headers["x-wp-total"]});
    })

    }
    }

    pageHandler=(val)=>{
        
        this.setState((state)=>{return {
            page:state.page+val,
            loading:true,
        }})

    }



    // categoryHandler=(id)=>{
    //     this.setState({selectedCategory:id,loading:true,page:1});
    // }
 

    render() {
        return (
            <div>
                
        <h1>Total : {this.state.total}</h1>

                {this.state.data.map(blog=>{
                    return (
                    <>
                    
                    <h1>{blog.title.rendered}</h1>

                    
                    <img src= {blog["jetpack_featured_media_url"]}   alt=""/>    
                    <td dangerouslySetInnerHTML={{__html:(blog.content.rendered.substring(0,200))}} />
                    {blog.content.rendered.substring(0,200)}
                    <Link to={"/blogs/"+blog.id}>go...</Link>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
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


export default  withRouter(Category);