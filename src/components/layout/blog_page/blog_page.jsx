import React, { Component } from 'react'
import axios from 'axios'
import { Link, Switch, Route } from 'react-router-dom'
import Blogs from './blogs/blogs'
import Blog from './blog/blog'
import BlogMain from './blog_main/blog_main'


 class BlogPage extends Component {

    state={
        data:[],
        page:1,
        perPage:10,
        loading:true,
        totalPages:1,
        selectedCategory:null,
    }



    render() {
        return (
            <>

            
          <Switch>

          <Route exact path={"/blogs/main"}>
          <BlogMain/>
          </Route>

          <Route exact path={"/blogs"}>
          <Blogs/>
          </Route>

          <Route exact path={"/blogs/:id"}>
           <Blog/>
          </Route>

          </Switch>

           </>
        )
    }
}


export default BlogPage;
