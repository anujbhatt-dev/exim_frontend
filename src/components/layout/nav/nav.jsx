import React, {Component} from "react";
import {Link} from "react-router-dom";
import exim from "../../../assets/images/exim.svg"

  class Navigation extends Component{

    render(){

      return (
          <div className="nav">
              <img className="nav__compName" src={exim} alt="EXIM"/>
              <ul className="nav__list">
                <Link to="/a"><li className="nav__list_item">Premium</li><hr className="nav__list_Hr"/></Link>
                <Link to="/"><li className="nav__list_item">Home</li><hr className="nav__list_Hr"/></Link>
                <Link to="/"><li className="nav__list_item">Courses</li><hr className="nav__list_Hr"/></Link>
                <Link to="/"><li className="nav__list_item">plans</li><hr className="nav__list_Hr"/></Link>
                <Link to="/"><li className="nav__list_item">About Us</li><hr className="nav__list_Hr"/></Link>
              </ul>
          </div>
      )
    }
  }


 export default Navigation;
