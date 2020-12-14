import React, {Component} from "react"
import Navigation from "./nav/nav"
import Landing from "./landing/landing"
import Pricing from "./pricing/pricing"
import AboutUs from "./aboutUs/aboutUs"
import Course from "./course/course"
import Footer from "./footer/footer"
import GoToTop from "./goToTop/goToTop"
import { Switch, Route } from "react-router-dom";
import BlogsPage from "./blog_page/blog_page"

class Layout extends Component{

  render(){

    return (
          <div className="layout">
               <Navigation/>
               <GoToTop/>
               <Switch>
               <Route exact  path="/">
                 <Landing/>
               </Route>
               <Route   path="/blogs">
                 <BlogsPage/>
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

              <Route exact  path="/course">
                  <Course/>
              </Route>
               </Switch>
               <Footer/>
          </div>
    )
  }
}


 export default Layout;
