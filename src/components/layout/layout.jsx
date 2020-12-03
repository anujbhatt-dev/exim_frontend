import React, {Component} from "react"
import Navigation from "./nav/nav"
import Blogs from "./blogs/blogs";
import { Switch, Route } from "react-router-dom";
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
