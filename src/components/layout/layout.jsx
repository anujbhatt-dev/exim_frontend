import React, {Component} from "react"
import Navigation from "./nav/nav"
import ContactUs from "./contact_us/contact_us";
import Blogs from "./blogs/blogs";
import { Switch, Route } from "react-router-dom";
import Blog from "./blogs/blog/blog"

class Layout extends Component{

  render(){

    return (
          <div className="layout">
               <Navigation/>
               
               {/* <Switch>
               <Route></Route>  <Blogs/>
                <Route exact path="/blog/:id"> <Blog/></Route>
               </Switch> */}
          </div>
    )
  }
}


 export default Layout;
