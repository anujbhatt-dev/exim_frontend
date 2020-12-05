import React, {Component} from "react"
import Navigation from "./nav/nav"
import Landing from "./landing/landing"
import Pricing from "./pricing/pricing"
import AboutUs from "./aboutUs/aboutUs"
import Footer from "./footer/footer"
import Blogs from "./blogs/blogs";
import { Switch, Route } from "react-router-dom";

class Layout extends Component{

  render(){

    return (
          <div className="layout">
               <Navigation/>

               <Switch>
               <Route exact  path="/">
                 <Landing/>
               </Route>
               <Route  path="/blogs">
                 <Blogs/>
              </Route>

              <Route exact  path="/">
                <Landing/>
              </Route>

              <Route exact  path="/pricing">
                  <Pricing/>
              </Route>

              <Route exact  path="/about">
                  <AboutUs/>
              </Route>
               </Switch>
               <Footer/>
          </div>
    )
  }
}


 export default Layout;
