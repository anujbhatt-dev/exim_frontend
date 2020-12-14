 import React, {Component} from "react"


 class GoTOTop extends Component{

   state={
     display:"none"
   }

  componentDidMount=()=>{
     window.addEventListener('scroll',()=>{
      if(window.pageYOffset>=1000){
        this.setState({
          display:"flex"
        })
      }else{
        this.setState({
          display:"none"
        })
      }
    })
  }

  goToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }

   render(){

     return (
         <div onClick={this.goToTop} style={{display:this.state.display}} className="goToTop"><i className="renderAnimation2 doubleArrow fa fa-angle-double-up" aria-hidden="true"></i></div>
     )
   }
 }


export default GoTOTop;
