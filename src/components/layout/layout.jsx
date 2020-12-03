import React, {Component} from "react"
import Navigation from "./nav/nav"
<<<<<<< HEAD
import Landing from "./landing/landing"
=======
import Blogs from "./blogs/blogs";
import { Switch, Route } from "react-router-dom";
import FlipNumbers from 'react-flip-numbers';
>>>>>>> bb2730dc2623bb091477a199f16130f965ef0cd4

class Layout extends Component{

  render(){

    return (
          <div className="layout">
               <Navigation/>
<<<<<<< HEAD
               <Landing/>
=======
               
               <Switch>
               <Route  path="/blogs"> <Blogs/></Route>                
               </Switch>
        
>>>>>>> bb2730dc2623bb091477a199f16130f965ef0cd4
          </div>
    )
  }
}


 export default Layout;
