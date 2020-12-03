import React, {Component} from "react"
import Navigation from "./nav/nav"
import ContactUs from "./contact_us/contact_us";
import Blogs from "./blogs/blogs";
import { Switch, Route } from "react-router-dom";
import Blog from "./blogs/blog/blog"
import FlipNumbers from 'react-flip-numbers';


class Layout extends Component{

  render(){

    return (
          <div className="layout">
               <Navigation/>
               
               <Switch>
               <Route  path="/blogs"> <Blogs/></Route>                
               </Switch>
               
          </div>
    )
  }
}


 export default Layout;
