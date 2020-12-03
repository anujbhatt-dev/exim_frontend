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