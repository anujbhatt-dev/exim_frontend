import React, {Component} from "react"
import greenCall from "../../../assets/images/greenCall.svg";
import vBar from "../../../assets/images/vBar.svg";

  class AboutUs extends Component{

    state={
      name:"",
      email:"",
      mobile:"",
      pref:""
    }

    onChangeHandler=(e)=>{
      e.preventDefault();
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    onSubmitHandler=(e)=>{
      e.preventDefault();
       console.log(this.state);
      this.setState({
        name:"",
        email:"",
        mobile:"",
        pref:""
      })
    }

    render(){

      return (
           <div className="about">
              <h1 className="heading-primary landing__3_heading">Reach us</h1>
              <h4>Choose a plan that works best for you<br/>or your team</h4>
              <div className="about__1">
                  <form className="about__1_form" onSubmit={this.onSubmitHandler}>
                      <input name="name" value={this.state.name} onChange={this.onChangeHandler} placeholder="name" type="text"/>
                      <input name="mobile" value={this.state.mobile} onChange={this.onChangeHandler} placeholder="mobile" type="text"/>
                      <input name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="email" type="text"/>
                      <input name="pref" value={this.state.pref} onChange={this.onChangeHandler} placeholder="plan preference" type="text"/>
                      <input className="btn__buy" placeholder="SUBMIT" type="submit"/>
                  </form>

                  <div className="about__1_text">
                      <div className="about__1_text-big">Talk to our <span>Experts</span></div>
                      <div className="about__1_text-small">We need a few details to reach you.<br/><span>or</span><br/>Simply call us</div>
                      <div className="about__1_text-call"><img src={greenCall} alt=""/><img src={vBar} alt=""/>+91  8517885555</div>
                  </div>
              </div>
           </div>
      )
    }
  }


 export default AboutUs;
