import React, { Component } from 'react'
import axios from 'axios' 
import { Link, Switch, Route } from 'react-router-dom'
import Category from './category/category'
import Blog from './blog/blog'
import Filter from './filter/filter'
import Tag from './tag/tag'


 class Blogs extends Component {

    state={
        data:[],
        page:1,
        perPage:10,
        loading:true,
        totalPages:1,
        selectedCategory:null,
    }

    // componentDidMount=()=>{

    //     axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/posts?page=1&per_page=10").
    //     then(res=>{
            
    //       this.setState({data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"]});
    //     });

    //     axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/categories").
    //     then(res=>{
    //       this.setState({categories:res.data});
    //     })

    // }

    componentDidUpdate=()=>{

        
      
        if(this.state.loading)
       {

        if(this.state.selectedCategory===null)
            axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage).
        then(res=>{
           
          this.setState({data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"]});
        })

        else
        axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage+"&categories="+this.state.selectedCategory).
    then(res=>{
       
      this.setState({data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"]});
    })

    }
    }
    

 

  


    render() {
        return (
            <>
          <Switch>
          <Route exact path={"/blogs/category/:id"}>
          <Category/>
          </Route>

          <Route exact path={"/blogs/category"}>
          <Category/>
          </Route>

          <Route path={"/blogs/tag/:id"}>
          <Tag/>
          </Route>

          <Route exact path={"/blogs/:id"}>
          <Blog/>
          </Route>
         
          </Switch>
          <Filter/>

</>
        )
    }
}


export default Blogs;