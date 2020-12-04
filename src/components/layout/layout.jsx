import React, {Component} from "react"
import Navigation from "./nav/nav"
import Landing from "./landing/landing"
import Footer from "./footer/footer"
import Blogs from "./blogs/blogs";
import { Switch, Route } from "react-router-dom";
import FlipNumbers from 'react-flip-numbers';

class Layout extends Component{

  render(){

    return (
          <div className="layout">
               <Navigation/>

               <Switch>

               <Route   path="/blogs">
                 <Blogs/>
              </Route>

              <Route exact  path="/">
                <Landing/>
              </Route>
               </Switch>
               <Footer/>
          </div>
    )
  }
}


 export default Layout;
