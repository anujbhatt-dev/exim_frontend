import React, {Component} from "react"
import Navigation from "./nav/nav"
import Landing from "./landing/landing"

class Layout extends Component{

  render(){

    return (
          <div className="layout">
               <Navigation/>
               <Landing/>
          </div>
    )
  }
}


 export default Layout;
