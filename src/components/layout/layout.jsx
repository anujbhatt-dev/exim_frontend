import React, {Component} from "react"
import Navigation from "./nav/nav"
import ContactUs from "./contact_us/contact_us";
import Blogs from "./blogs/blogs";


class Layout extends Component{

  render(){

    return (
          <div className="layout">
               <Navigation/>
               
          </div>
    )
  }
}


 export default Layout;
