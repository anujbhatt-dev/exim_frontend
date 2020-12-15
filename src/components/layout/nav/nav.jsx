import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import exim from "../../../assets/images/exim.svg"
import $ from "jquery"

  class Navigation extends Component{

    state={
      mob:false
    }

    componentDidMount=()=>{


      if($(window).width()<=800){
         this.setState({
           mob:true
         })
      }

      let path=window.location.pathname+"";

      console.log(path)

         if(path.indexOf("course")!==-1)
         this.selectedNav(3);

        else if(path.indexOf("pricing")!==-1)
         this.selectedNav(2);

         else  if(path.indexOf("blog")!==-1)
         this.selectedNav(4);

         else if(path.indexOf("about")!==-1)
         this.selectedNav(5);

         else
         this.selectedNav(1);

    }

    selectedNav=(nav)=>{
       switch (nav) {
         case 1:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-1").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-1").css("color","#0062FF")
           break;
         case 2:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-2").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-2").css("color","#0062FF")
             break;
         case 3:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-3").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-3").css("color","#0062FF")
             break;
         case 4:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-4").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-4").css("color","#0062FF")
             break;
         case 5:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-5").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-5").css("color","#0062FF")
             break;
         default:
           $(".nav__list_Hr").css("display","none")
           $(".nav__list_Hr-1").css("display","block")
           $(".nav__list_item").css("color","#ADADAD")
           $(".nav__list_item-1").css("color","#0062FF")

       }
    }

    mobNavHndler=()=>{
      $(".nav__mob_wrapper").css({"opacity":"0","visibility":"hidden"});
      $(".nav__mob_wrapper2").css({"animation":"none","opacity":"0","visibility":"hidden"});
      $(".nav__mob_wrapper3").css({"animation":"none","opacity":"0","visibility":"hidden"})
    }

    menuHandler=()=>{

         $(".nav__mob_wrapper2").css({"animation":"wrapper2 5s linear","opacity":"1","visibility":"visible"});
         setTimeout(()=>{
           $(".nav__mob_wrapper").css({"opacity":"1","visibility":"visible"});
           $(".nav__mob_wrapper3").css({"animation":"wrapper3 10s linear infinite","opacity":"1","visibility":"visible"})
         },3000)
         setTimeout(()=>{
           $(".nav__mob_wrapper2").css({"animation":"wrapper2 5s linear","opacity":"0","visibility":"hidden"});
         },4900)
    }

    render(){

;

      return (
          <div className="nav">
              <img className="nav__compName" src={exim} alt="EXIM"/>
              {this.state.mob?
                <div className="nav__mob">
                    <div onClick={this.menuHandler} className="nav__mob_text">Menu <span>.</span></div>
                    <div className="nav__mob_wrapper">
                        <NavLink activeStyle={{color:"#0062FF"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/"><div className="nav__list_item nav__list_item-1">Home</div></NavLink>
                        <NavLink activeStyle={{color:"#0062FF"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/course"><div className="nav__list_item nav__list_item-3">Courses</div></NavLink>
                        <NavLink activeStyle={{color:"#0062FF"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/pricing"><div className="nav__list_item nav__list_item-2">Pricing</div></NavLink>
                        <NavLink activeStyle={{color:"#0062FF"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/blogs/main"><div className="nav__list_item nav__list_item-4">blogs</div></NavLink>
                        <NavLink activeStyle={{color:"#0062FF"}} onClick={()=>this.mobNavHndler()} className="nav__mob_wrapper-link" to="/about"><div className="nav__list_item nav__list_item-5">About Us</div></NavLink>
                    </div>
                    <div className="nav__mob_wrapper2">

                    </div>
                    <div className="nav__mob_wrapper3">
                    </div>
                </div>
                :<ul className="nav__list">
                <NavLink onClick={()=>this.selectedNav(1)} className="nav__link" to="/"><li className="nav__list_item nav__list_item-1">Home</li><hr className="nav__list_Hr nav__list_Hr-1"/></NavLink>
                <NavLink onClick={()=>this.selectedNav(3)} className="nav__link" to="/course"><li className="nav__list_item nav__list_item-3">Courses</li><hr className="nav__list_Hr nav__list_Hr-3"/></NavLink>
                <NavLink onClick={()=>this.selectedNav(2)} className="nav__link" to="/pricing"><li className="nav__list_item nav__list_item-2">Pricing</li><hr className="nav__list_Hr nav__list_Hr-2"/></NavLink>
                <NavLink onClick={()=>this.selectedNav(4)} className="nav__link" to="/blogs/main"><li className="nav__list_item nav__list_item-4">blogs</li><hr className="nav__list_Hr nav__list_Hr-4"/></NavLink>
                <NavLink onClick={()=>this.selectedNav(5)} className="nav__link" to="/about"><li className="nav__list_item nav__list_item-5">About Us</li><hr className="nav__list_Hr nav__list_Hr-5"/></NavLink>
              </ul>}
          </div>
      )
    }
  }


 export default withRouter(Navigation);
